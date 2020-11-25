const express = require('express');
const db = require('../models');
const router = express.Router();

module.exports = (fs) => {
  const dataPath = `${__dirname}/../data`

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
    // SELECT action, word FROM "Words" 
    const data = await db.Word.findAll({
      attributes: ['action', 'word'],
      raw: true
    });
    res.json(data);
  });

  router.get('/playerActions', (req, res) => {
    fs.readFile(`${dataPath}/playerActions.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });

  router.get('/arenas', (req, res) => {
    const getAllArenas = async (req, res) => {
   
     const arenas = await Arena.findAll();
     console.log("JILLIAN", arenas)

     response.json(arenas);

    }

  });


  return router;
}