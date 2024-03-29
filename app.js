var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/index')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff');
const shopRouter = require('./routes/shop')
const {errorHandler} = require('./middleware/errorHandler')

var app = express();

app.use(logger("dev"));
app.use(
  express.json({
    limit: "50mb",
  })
);

mongoose.connect(config.MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company',companyRouter);
app.use('/staff',staffRouter);
app.use('/shop',shopRouter);
app.use('/menu',shopRouter);

app.use(errorHandler);
module.exports = app;
