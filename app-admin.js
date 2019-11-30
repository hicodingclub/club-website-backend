const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const appRootPath = require('app-root-path');

const logger = require('./lib/logger');
// connect db
require('./db');

const meanRestExpress = require('@hicoder/express-core');

// Insert your own model definition here.
// Example:
// const academicsDbDefinition = require('./models/academics/index');
// const academicsRouter = meanRestExpress.RestRouter(academicsDbDefinition, 'Academics');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('combined', {stream: logger.stream}));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public-admin')));

// insert your routers here
// Example:
// app.use('/api/academics', academicsRouter);

// fall back to index.html
app.get(/.*/, function(req, res, next) {
  if (req.accepts('html')) {
	  return res.sendFile(path.join(__dirname, './public-admin/index.html'));
  } else {
    return next();
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  const allowedErrCode = [400, 401, 403, 404];
  if (!allowedErrCode.includes(err.status)) {
    logger.error(err)
  }

  // render the error page
  res.status(err.status || 500);

  res.render('error');
});

module.exports = app;
