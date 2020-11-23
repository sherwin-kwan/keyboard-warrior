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
    fs.readFile(`${dataPath}/words.json`, 'utf8', (err, data) => {
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
    fs.readFile(`${dataPath}/arenas.json`, 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });


  return router;
}