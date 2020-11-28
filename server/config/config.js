require('dotenv').config();
module.exports = {
  "development": {
    "url": process.env.DATABASE_URL,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "quoteIdentifiers": false
  },
  "test": {
    "username": "development",
    "password": "development",
    "database": "word_game_test",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "quoteIdentifiers": false
  },
  "production": {
    "url": process.env.DATABASE_URL,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "quoteIdentifiers": false
  }
}