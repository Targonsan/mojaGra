const express = require('express');// w kazdym roucie trzeba require
const User=require('../models/user') //modele z duzej litery!!

const router = express.Router();

router.all('*',(req,res,next)=>{// to next jest wazne aby suie wykonały dalej rzeczy
  if(!req.session.Jacek){
    res.redirect('login');
    return;// konczy działanie funkcji , bez tego by nam bład poszedł !!
  }
    next()// bardzo wazne aby sie nam dlaje wykonał skrypt z tej strony !!!
  });


router.get('/', (req, res, next)=> {// req to co dostajemy res to co zwracamy uzytkownikowi

  const newsData=new User({
    author:'Jacek'
    
    
  });
  // gydby sie nei udalo to bdzie error
  newsData.save((err)=>{
    console.log(err);
  });
  console.log('kurwaaa');
  res.render('user', { title: 'Witaj Uzytkowniku', img:'/images/pies.jpg' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt 


module.exports = router;// model routingu strony !!



// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
