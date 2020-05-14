var createError = require('http-errors');
var cookieSession = require('cookie-session')// w propozycji jest przed importem expressu
var express = require('express');
var path = require('path');// do pobiernaia sciezki public
var cookieParser = require('cookie-parser');//wspiera nas w coockies 
var logger = require('morgan');//słuzy od zrzucania logów w tryba developerskim
var config=require('./config')
var mongoose = require('mongoose');// nasze mongoose 
// nastepnie łaczymy sie z nasza baza danych !! wazne jest to aby było ot n samym poczatku ?
mongoose.connect(config.db, {useNewUrlParser: true});

// do sprawdzania cyz nam sie udało połaczyć czy też nie !!

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
//jeslie sie nie połaczy ot bedzie bład !
// db.once('open', function() {
//   console.log('db connect');
// });


var indexRouter = require('./routes/index');//nasze importy
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var newsRouter = require('./routes/news');
var quizRouter = require('./routes/quiz');
var rejestrationRouter = require('./routes/rejestration');
var drugielogowanieRouter = require('./routes/drugielogowanie');
// połacznei z baza dnaych ! przeniose je do configa
//mongodb+srv://Radek:hJOCjawvMtaW8jeV@cluster0-ofbud.mongodb.net/test?retryWrites=true&w=majority

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));// silnik do systemu pug
app.set('view engine', 'pug');// gdzie tworzymy nasze szablony

app.use(logger('dev'));// app.use jest to wywyałonie expressu i przekasywnaie dalszych middlewarsów
app.use(express.json());// przechwytywnaie naszeog body 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// katlaog  znaszymy assetami pliki po stornei przegldarki
// ta funkcja wywołuejsie za kdym razem jesli cos sie stanie get post itd pokazuje nam sciezne co ja wywołało !

// moja logika i ustwianie plikow coockie
app.use(cookieSession({
  name: 'session',
  keys: config.keySession,
  // klucz podpisujacy nam sesje przez co bedzie ona trudniejsza do podmiany!
  // w tym momencie nasze pliki beda ładowane z pliku config.js

  //cookie options
  maxAge: config.maxAgeSession
}))

app.use(function(req,res,next){
  // console.log(req.path);
  res.locals.path=req.path;
  //jak zrobic zmienna lobalna ? tutaj przypisuje ja do res.locals.path/ path ot moja nazwa
  next();// zeby sie nam nie zatrzyamł na routingu i psozedł dalej
});

app.use('/', indexRouter);// deklaracja gdie jest dostpeny dany 
app.use('/users', usersRouter);
app.use('/news', newsRouter);
app.use('/quiz', quizRouter);
app.use('/admin', adminRouter);
app.use('/rejestration', rejestrationRouter);
app.use('/drugielogowanie', drugielogowanieRouter);

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
