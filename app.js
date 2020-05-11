var createError = require('http-errors');
var express = require('express');
var path = require('path');// do pobiernaia sciezki public
var cookieParser = require('cookie-parser');//wspiera nas w coockies 
var logger = require('morgan');//słuzy od zrzucania logów w tryba developerskim

var indexRouter = require('./routes/index');//nasze importy
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));// silnik do systemu pug
app.set('view engine', 'pug');// gdzie tworzymy nasze szablony

app.use(logger('dev'));// app.use jest to wywyałonie expressu i przekasywnaie dalszych middlewarsów
app.use(express.json());// przechwytywnaie naszeog body 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// katlaog  znaszymy assetami pliki po stornei przegldarki

app.use('/', indexRouter);// deklaracja gdie jest dostpeny dany 
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {// wyłapuje adressy które nie istnieja !
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);// 500 to bład servera
  res.render('error');
});

module.exports = app;
