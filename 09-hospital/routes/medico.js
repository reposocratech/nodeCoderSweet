const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const uploadFile = require('../middlewares/uploadFile');

router.get('/allDoctors', (req, res) => {
  let sql = 'select * from doctor'
  connection.query(sql, (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      
      res.render('team', {result})
    }
  })
});

router.get('/newDoctor', (req, res)=>{
  res.render('formNewDoctor')
})

router.post('/newDoctor', uploadFile("doctors"), (req, res)=>{
  const {name, lastname, especialidad, curriculum} = req.body;
  let sql = 'INSERT INTO doctor (name, lastname, especialidad, curriculum) VALUES (?,?,?,?)';
  let values = [name, lastname, especialidad, curriculum]
  
  if(req.file !== undefined){
    sql = 'INSERT INTO doctor (name, lastname, especialidad, curriculum, avatar) VALUES (?,?,?,?,?)';
    values = [name, lastname, especialidad, curriculum, req.file.filename]
  }
  connection.query(sql, values, (err, result)=>{
    if(err){
      throw err;
    }else{
      res.redirect('/admin')
    }
  })
}
)

router.get("/oneDoctor/:id", (req, res)=>{
  const {id} = req.params;
  let sql = 'SELECT * FROM doctor WHERE doctor_id = ?'

  connection.query(sql, [id], (err, result)=>{
    if(err){
      throw err;
    }else{
      console.log(result);
      
      res.render("doctorProfile", {doctor: result[0]})
    }
  })
})

module.exports = router;
