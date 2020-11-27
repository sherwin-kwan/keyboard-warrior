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

  // Associations between models (Note: Not to be confused with references between db tables in the migrations folder. The migrations  
  // handle how the database does things like cascading on delete, but these few lines of code make it possible for Sequelize to combine
  // tables. Just like how even if you've set up a database schema, when you do queries you still have to write JOIN on 



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

  router.get('/games', function (req, res, next) {
    res.json({
      "message": "Hello, this is the games API endpoint"
    });
  });

  router.get('/game/:id', async (req, res) => {
    try {
      // const test = await Game.findByPk(41);
      // res.json(test);
      const battles = await Battle.findAll({
        attributes: ['id', 'start_time', 'end_time', 'time_seconds', 'base_score'],
        where: {
          game_id: req.params.id
        }
      });
      res.json(battles);
    } catch (err) {
      res.send(err.message);
    }
  })

  router.post('/games', (req, res) => {
    const name = req.body.player_name;
    Game.create({
      player_name: name
    }).then((result) => res.json(result.id))
      .catch(err => res.json(err));
  });

  router.post('/battles', (req, res) => {
    const battle = req.body;
    Battle.create({
      gameId: battle.game_id,
      arenaId: battle.arena_id,
      win: battle.win,
      start_time: battle.start_time,
      end_time: battle.end_time
    }).then(data => res.json(data))
      .catch(err => res.json(err));
  });


  return router;
};