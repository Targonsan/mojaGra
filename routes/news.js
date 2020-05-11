const express = require('express');// w kazdym roucie trzeba require
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
  res.render('news', { title: 'News' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt 


module.exports = router;// model routingu strony !!
