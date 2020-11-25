const express = require('express');
const { sequelize } = require('../models');
const db = require('../models');
const { Word, Action, Difficulty, Arena, Game } = db;
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

  /* Placeholder for a future API GET. */
  router.get('/', function (req, res, next) {
    res.json({
      "message": "Hello world"
    });
  });

  router.get('/words-old', (req, res) => {
    fs.readFile(`${dataPath}/words.old.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
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

  router.get('/games', function (req, res, next) {
    res.json({
      "message": "Hello, this is the games API endpoint"
    });
  });

  router.put('/games', async (req, res) => {

    //get the name input
    const game = req.body;
    console.log("the game object", game)

    //do a DB insert
    const newGame = await Game.create({
      player_name: game
    }, { returning: true })

    // const data = await Arena.findAll({
    //   include: Difficulty,
    //   attributes: ['id', 'name', ['arena_image', 'arena_card'], 'challenger_name', 'challenger_sprite', 'points']
    // });
    res.send("SENTERINO");
  });


  return router;
}