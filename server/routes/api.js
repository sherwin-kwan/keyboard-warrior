const express = require('express');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../models');
const db = require('../models');
const { Word, Action, Difficulty, Arena, Game, Battle } = db;
const router = express.Router();
const shuffle = require('../helpers/shuffle');

`select game_id, sum(arenas.points * 30 / extract (second from (end_time - start_time))) as total
from battles join arenas on arenas.id = battles.arena_id group by game_id order by total desc;
`

module.exports = (fs) => {
  const dataPath = `${__dirname}/../data`


  /* Placeholder for a future API GET. */
  router.get('/', function (req, res, next) {
    res.json({
      "message": "Nothing to see here, move along"
    });
  });

  // Returns the action names and icons, and the words associated with them - so everything needed to render the words part of the arena
  // The id in params is the arena ID
  router.get('/action-words/:id', async (req, res) => {
    try {
      const rawData = await Action.findAll({
        include: Word,
        attributes: ['name', 'icon', 'sound'],
        where: {
          '$words.arena_id$': req.params.id
        }
      });
      const data = rawData.map(action => {
        return {
          name: action.name,
          icon: action.icon,
          sound: action.sound,
          words: shuffle(action.Words.map(w => w.word))
        };
      });
      res.json(data);
    }
    catch (err) {
      res.send(err.message);
    }
  });

  router.get('/arenas', async (req, res) => {
    try {
      const data = await Arena.findAll({
        include: Difficulty,
        attributes: ['id', 'name', ['arena_image', 'arena_card'], 'challenger_name', 'challenger_sprite', 'points']
      });
      res.json(data);
    }
    catch (err) {
      res.send(err.message);
    }
  });

  router.get('/game/:id/details', async (req, res) => {
    try {
      const battles = await Battle.findAll({
        attributes: ['id', 'start_time', 'end_time', 'time_seconds', 'score'],
        where: {
          game_id: req.params.id
        }
      });
      res.json(battles);
    } catch (err) {
      res.send(err.message);
    }
  })

  router.get('/game/:id', async (req, res) => {
    // Get a player's current score for the instance of the game they're playing
    // select sum(score) from battles where game_id = X;
    try {
      const data = await Battle.findAll({
        attributes: [[sequelize.fn('COALESCE', sequelize.fn('SUM', sequelize.col('score')), 0), 'score']],
        where: {
          game_id: req.params.id
        }
      });
      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  })

  router.get('/leaders', async function (req, res) {
    // Gets the data for the leaderboard. Later on, can support multiple pages
    try {
      const data = await sequelize.query(`SELECT player_name, SUM(score) AS score
      FROM battles JOIN games ON battles.game_id = games.id
      WHERE score IS NOT NULL
      AND games.win = true
      GROUP BY game_id, games.player_name
      ORDER BY score DESC
      LIMIT :limit;
      OFFSET :offset;
      `, {
        type: QueryTypes.SELECT,
        replacements: { 
          limit: 10,
          offset: req.query.page * limit || 0 }
      });
      res.json(data);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  router.post('/games', (req, res) => {
    const name = req.body.player_name;
    Game.create({
      player_name: name
    }).then((result) => res.json(result.id))
      .catch(err => res.json(err));
  });

  router.post('/battles', async (req, res) => {
    const myBattle = await Battle.build({
      gameId: req.body.game_id,
      arenaId: req.body.arena_id,
      win: req.body.win,
      start_time: req.body.start_time,
      end_time: req.body.end_time
    });
    if (req.body.win) {
      const arenaStats = await Arena.findByPk(req.body.arena_id, {
        include: Difficulty
      });
      const { par_time } = arenaStats.Difficulty
      const multiplier = (myBattle.time_seconds < par_time) ? (par_time / myBattle.time_seconds) : 1;
      myBattle.score = Math.round(multiplier * arenaStats.points);
      console.log(`Received score ${myBattle.score} for finishing arena with ${par_time} second par in ${myBattle.time_seconds} seconds.
      Base score was ${arenaStats.points}`);
      if (arenaStats.name === 'Boss') {
        // Beating the boss means you win the game
        const row = await Game.findByPk(req.body.game_id);
        row.win = true;
        await row.save();
        console.log('Saved row ', req.body.game_id, 'with a win');
      }
    } else {
      myBattle.score = 0;
    }
    try {
      const data = await myBattle.save();
      console.log('Saved data: ', data);
      res.status(201).json(myBattle);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  return router;
};