const express = require('express');// w kazdym roucie trzeba require
const News=require('../models/news')
const router = express.Router();
// metoda wykona sie najpierw zasze keidy przydjzie post get, delte itd
router.all('*',(req,res,next)=>{// to next jest wazne aby suie wykonały dalej rzeczy
if(!req.session.admin){
  res.redirect('login');
  return;// konczy działanie funkcji , bez tego by nam bład poszedł !!
}
  next()// bardzo wazne aby sie nam dlaje wykonał skrypt z tej strony !!!
});

router.get('/',(req,res)=>{
  News.find({},(err,data)=>{// bo robi asynchornicznie?
    console.log(data);
    res.render('admin/index', { title: 'Admin',data });
  });

  
});

/* GET home page. */
router.get('/', (req, res, next)=> {// req to co dostajemy res to co zwracamy uzytkownikowi
  // console.log(req.session.admin);// wyswietla nam 1 z naszego przekierowania z index.js

  // const newsData=new News({
  //   title:'tytul testowy',
  //   description: 'Opis'
    
  // });
  // // gydby sie nei udalo to bdzie error
  // newsData.save((err)=>{
  //   console.log(err);
  // });
  // console.log('dupas');

  res.render('admin/index', { title: 'Admin' });// index to wskaznie nazwy szablonu

});// w obniekcie przekazuje obiekt 

router.get('/news/add',(req,res)=>{//sciezka !!!
  res.render('admin/news-form',{title:'Dodaj new',body:{}, errors:{}})// neiwiem po co tutaj  dawac body ?
});

router.post('/news/add',(req,res)=>{//sciezka !!!
  const body= req.body;

  const newsData=new News(body)

  // walidacja 1!!!
  const errors=newsData.validateSync()// czy jest to co ma requirde w models/news
  // console.log(errors);

  // gydby sie nei udalo to bdzie error
  newsData.save((err)=>{
   if(err){
    res.render('admin/news-form',{title:'Dodaj new',errors, body})
    return;
   }else{
      res.redirect('/admin')
    }
  });
  // res.render('admin/news-form',{title:'Dodaj new',errors, body})//errors to tablica bledow
});

router.get('/news/delete/:id',(req,res)=>{//sciezka !!!
  News.findByIdAndDelete(req.params.id , (err)=>{
    res.redirect('/admin')
  })
});


module.exports = router;// model routingu strony !!
