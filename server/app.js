// Libraries
// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

// Load .env data into process.env
const ENV = process.env.NODE_ENV || "development";
const PATH = path.resolve(__dirname, "./.env." + ENV);
console.log('Path is: ', PATH);
require("dotenv").config({ path: PATH });


// Database
const { sequelize } = require('./models');

// Create server
const app = express();


// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


// Constants
const PORT = process.env.PORT || 3001;

console.log('ENV is: ', process.env.DATABASE_URL);

// Test code to print if Sequelize connects successfully
const testSequelize = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testSequelize();

// Routers
const apiRouter = require('./routes/api')(fs);


// Mount routes
app.use('/api', apiRouter);

// Error if a non-API route is submitted to the server
app.get('/', (req, res) => {
  res.status(404).send('This page does not exist on the API');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

module.exports = app;
