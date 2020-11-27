const express = require('express');
const { sequelize } = require('../models');
const db = require('../models');
const { Word, Action, Difficulty, Arena, Game, Battle } = db;
const router = express.Router();
const shuffle = require('../helpers/shuffle');

module.exports = (fs) => {
  const dataPath = `${__dirname}/../data`

  // Associations between models (Note: Not to be confused with references between db tables in the migrations folder. The migrations  
  // handle how the database does things like cascading on delete, but these few lines of code make it possible for Sequelize to combine
  // tables. Just like how even if you've set up a database schema, when you do queries you still have to write JOIN on 
  Difficulty.hasMany(Arena);
  Arena.belongsTo(Difficulty);
  Action.hasMany(Word);
  Word.belongsTo(Action);
  Arena.hasMany(Word);
  Word.belongsTo(Arena);
  Game.hasMany(Battle);
  Battle.belongsTo(Game);
  Arena.hasMany(Battle);
  Battle.belongsTo(Arena);

  /* Placeholder for a future API GET. */
  router.get('/', function (req, res, next) {
    res.json({
      "message": "Nothing to see here, move along"
    });
  });

  router.get('/words', async (req, res) => {
    const rawData = await Word.findAll({
      include: Action,
      attributes: ['word']
    })
    const data = rawData.map((w) => {
      return {
        word: w.word,
        action: w.Action.name
      }
    });
    res.json(data);
  });

  // Returns the action names and icons, and the words associated with them - so everything needed to render the words part of the arena
  // The id in params is the arena ID
  router.get('/action-words/:id', async (req, res) => {
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
  });

  router.get('/arenas', async (req, res) => {
    const data = await Arena.findAll({
      include: Difficulty,
      attributes: ['id', 'name', ['arena_image', 'arena_card'], 'challenger_name', 'challenger_sprite', 'points']
    });
    res.json(data);
  });

  // Returns the battles and scores for a game
  router.get('/game/:id', (req, res) => {
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
    }).then( (result) => res.json(result.id) )
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