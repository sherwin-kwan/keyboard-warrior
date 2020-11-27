const express = require('express');
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

  router.get('/game/:id', async (req, res) => {
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

  router.get('/games', function (req, res, next) {
    res.json({
      "message": "Hello, this is the games API endpoint"
    });
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
    } else {
      myBattle.score = 0;
    }
    try {
      const data = await myBattle.save();
      console.log('Saved data: ', data);
      res.status(201).json(myBattle);
    } catch (err) {
      res.status(500).json({error: err.message});
    }
  });


  return router;
};