const express = require('express');// w kazdym roucie trzeba require
const router = express.Router();


/* GET home page. */
router.get('/', (req, res)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
  res.render('drugielogowanie', { title: 'Inny formularz do logowania' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt 



// tutaj bedzie weryfikacja
router.post('/', (req, res)=> {
  //dane z naszego formularza nzjaduja sie w req bo one ida do nas i sa w parametrze body!!!
  console.log(req.body);
  const body=req.body;
 
  res.render('drugielogowanie', { title: 'Inny formularz do logowania' });
});


module.exports = router;// model routingu strony !!
