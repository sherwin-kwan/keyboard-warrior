const express = require('express');
const router = express.Router();

module.exports = (fs) => {
  const dataPath = `${__dirname}/../data`

  /* Placeholder for a future API GET. */
  router.get('/', function(req, res, next) {
    res.json({
      "message": "Hello world"
    });
  });
  
  router.get('/words', (req, res) => {
    fs.readFile(`${dataPath}/words.json`, 'utf8', (err, data) => {
      if(err) throw err;
      res.json(JSON.parse(data));
    });
  });

  router.get('/playerActions', (req, res) => {
    fs.readFile(`${dataPath}/playerActions.json`, 'utf8', (err, data) => {
      if(err) throw err;
      res.json(JSON.parse(data));
    });
  });

  return router;
}