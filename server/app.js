// Load .env data into process.env
require('dotenv').config();

// Libraries
// const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Constants
const PORT = process.env.PORT || 3001;
// const ENV = process.env.ENV || "typing-game";

// DB setup
const { Pool } = require('pg');
const dbParams = require('./db/db.js');
const db = new Pool(dbParams);
db.connect(err => {
  if(err) console.log('DB Connection Error: ', err);
});

// Routers
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Server setup
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

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
