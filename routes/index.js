const express = require('express');// w kazdym roucie trzeba require
const router = express.Router();
const login ='admin';
const password='123';


/* GET home page. */
router.get('/', (req, res)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
  res.render('index', { title: 'Express' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt 

// wyswietlanie naszego formularze do logowania login.pug
router.get('/login', (req, res)=> {
  res.render('login', { title: 'Logowanie' });
});

// tutaj bedzie weryfikacja
router.post('/login', (req, res)=> {
  //dane z naszego formularza nzjaduja sie w req bo one ida do nas i sa w parametrze body!!!
  console.log(req.body);
  const body=req.body;
  if(body.login===login && body.password===password)
  {
    req.session.admin=1;
    console.log('chuj');
    res.redirect('/admin')
  }else{res.redirect('/login')}
  //zeby dodawac i utrzymywac sesje potrzebna nam bedzie dodatkowa biblioteka !!! i zeby to zorbic nalezy :
  // 1. zainstalowac cookie-session za pomoca npm : npm i -s cookie-session
 

 
});


module.exports = router;// model routingu strony !!



// //
// // const login2='Jacek';
// const password2='dupa';
// else if(body.login===login2 && body.password===password2){
//   req.session.Jacek=2;
//   res.redirect('/users')
  
// }else if(body.login==='dupa' && body.password==='gej'){
//   req.session.dupa=3
//   res.render('user', { title: 'Witaj dupo !', img:'/images/pobrane.jpg' });
// }else if(body.login==='dupa1' && body.password==='gej1'){
//   req.session.dupa1=4
//   res.render('user', { title: body.login});
// }