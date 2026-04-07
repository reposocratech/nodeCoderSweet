const express = require('express');
const connection = require('../config/db')

const router = express.Router();

router.get('/allSpecialty', (req, res)=>{
    let sql = 'select * from specialty';

    connection.query(sql, (err, result)=>{
        if(err){
            throw err;
        }else{
            res.render('specialty', { result })
        }
    })
})

//abre el formulario de nueva especialidad
router.get('/newSpecialty', (req, res)=>{
    res.render('formNewSpecialty')
})

//recoge los datos del formulario de una nueva especialidad

router.post('/newSpecialty', (req, res)=>{
    console.log(req.body);
    const {name, description} = req.body;
    let sql = 'INSERT INTO specialty (name, description) VALUES (?, ?)'
    let values = [name, description]
    connection.query(sql, values, (err, result)=>{
        if(err){
            throw err;
        }else{
            res.redirect("/admin");
        }
    })
    
})
module.exports = router;
