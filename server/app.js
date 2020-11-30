// Libraries
// const createError = require('http-errors');
const express = require('express');
const path = require('path');
// const cookieParser = require('cookie-parser');
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
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


// Constants
const PORT = process.env.PORT || 3001;

console.log('ENV is: ', process.env.DATABASE_URL);

const testSequelize = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testSequelize();

// DB setup - Old code without Sequelize
// const { Pool } = require('pg');
// const db = new Pool(dbParams);
// db.connect(err => {
//   if(err) console.log('DB Connection Error: ', err);
// });

// Routers
const apiRouter = require('./routes/api')(fs);


// Mount routes
app.use('/api', apiRouter);

// Error if a non-API route is submitted to the server
app.get('/', (req, res) => {
  res.status(404).send('This page does not exist on the API');
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

module.exports = app;
