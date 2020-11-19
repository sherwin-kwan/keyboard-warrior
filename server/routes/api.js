var express = require('express');
var router = express.Router();

/* Placeholder for a future API GET. */
router.get('/', function(req, res, next) {
  res.json({
    "message": "Hello world"
  });
});

module.exports = router;
