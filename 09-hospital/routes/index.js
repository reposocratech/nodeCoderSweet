var express = require('express');
const connection = require('../config/db');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/admin', (req, res)=>{
  let sqlDoctors = 'SELECT * FROM doctor';
  
  connection.query(sqlDoctors, (errD, resultDoctors)=>{
    if(errD){
      throw errD;
    }else{
      //hago la peticion de las especialidades
      let sqlEsp = 'SELECT * FROM specialty';
      connection.query(sqlEsp, (errE, resultEsp)=>{
        if(errE){
          throw errE;
        }else{
          console.log(resultDoctors, resultEsp);
          
          res.render('admin', {doctors: resultDoctors, specialties: resultEsp});
        }
      })
    }
  })
  
})

router.get('/services', (req, res)=>{
  res.render('services');
})

module.exports = router;
