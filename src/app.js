var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var devicesRouter = require('./routes/devices');
var buildingRouter = require('./routes/buildings');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
  
app.use('/', indexRouter);
app.use('/devices', devicesRouter);
app.use('/buildings', buildingRouter);

module.exports = app;
