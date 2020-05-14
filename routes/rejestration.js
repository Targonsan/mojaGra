const express = require('express');// w kazdym roucie trzeba require
const Rejestred=require('../models/zarejestrowani') //modele z duzej litery!!
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
    // console.log(req.body);
    // console.log('ccccccccccccccccccccccccccccccccc');
  res.render('rejestration', { title: 'rejestration',AnswerLogin:'' });// index to wskaznie nazwy szablonu
});// w obniekcie przekazuje obiekt
// tu nam zwraca to co chcemy 


// czy pierwsza litera jest duża !!


router.post('/', (req, res)=> {
    //dane z naszego formularza nzjaduja sie w req bo one ida do nas i sa w parametrze body!!!
    // console.log(req.body);
    const body=req.body;
    //walidacja loginu !!
    if(InculdeFirstBigLEtter(body) && LoginRightLength(body))
    {
      console.log('login jest ok');
        //walidacja hasła !!! 
      if(PasswordIncludespecjalChar(body) && PasswordInludesBigLetter(body) && PasswordRightLength(body))
      {
          console.log("Hasło jest w porządku");
          if(emailIncludespecjalChar(body))
          {
            res.render('rejestration', { title: 'rejestration',AnswerLogin:'Zarejestrowaleś sie !!' });
          }else{
            res.render('rejestration', { title: 'rejestration',AnswerLogin:'zły mail' });
          }
          }else{
          res.render('rejestration', { title: 'rejestration',AnswerLogin:'złe hasło' });
          }
    }else{
   
      res.render('rejestration', { title: 'rejestration',AnswerLogin:'za krótki login' });
  }  
       // const newsData=new Rejestred({
    //     login:body.login,
    //     password: body.password,
    //     email:body.email
        
    //   });
    //   // gydby sie nei udalo to bdzie error
    //   newsData.save((err)=>{
    //     console.log(err);
    //   });
    //   console.log('dupas')
    
    
      
  
    
    
function InculdeFirstBigLEtter(data)
  { 
      const tabLogin= [...data.login]
      let include=false;
      const specjalChars=['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','V','X','Y','Z','W','Y']

      specjalChars.forEach(element=>{
        if(element===tabLogin[0]){
          include=true;
          return include;
        }
      })
      console.log('Login zawiera duza pierwsza litere');
      return include; 
  }

function LoginRightLength(data)
   {
      const tabLogin= [...data.login]
      let include=false;
      if(tabLogin.length>=8){
        return true;
      }
      else{
        return false;
      }
  }

      // walidacja hasło  

function PasswordIncludespecjalChar(data)
   {
      const tabLogin= [...data.password]
      let include=false;
      const specjalChars=[',','.','$','@']
      tabLogin.forEach(element => {
        if(specjalChars.includes(element)){
          include=true;
          return include;
        }
      });
      console.log('hasło zawiera specjalne znaki');
      return include;
 }

 
function PasswordInludesBigLetter(data)
{
   const tabPassword= [...data.password]
   let include=false;
   console.log(tabPassword);
   const specjalChars=['A','B','C','D','E','F','G','H','I','J','K','M','N','L','O','P','Q','R','S','T','V','X','Y','Z','W','Y']
   tabPassword.forEach(element => {
     if(specjalChars.includes(element)){
       include=true;
       console.log('hasło zawiera dzua litere');
       return include;
     }
   });
   return include;
}
function PasswordRightLength(data)
   {
      const tabPassword= [...data.password]
      let include=false;
      if(tabPassword.length>=8){
        return true;
      }
      else{
        console.log('zła dlugosc hasła jest za krótkie');
        return false;
      }
  }

function emailIncludespecjalChar(data)
   {
    const tabEmail= [...data.email]
    let include=false;

     if(tabEmail.length>=10){
        if(tabEmail.includes('@')){
          if(tabEmail.includes('.')){
          include=true;
          }
        }
    }
      console.log('email zawiera specjalne znaki : ');
      return include;
 }

});



module.exports = router;// model routingu strony !!
