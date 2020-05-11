const express = require('express');// w kazdym roucie trzeba require
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
  res.render('users', { title: 'Users' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt 


module.exports = router;// model routingu strony !!



// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
