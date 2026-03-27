const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const uploadFile = require('../middlewares/uploadFile');


//sirve la página que muestra el catálogo de bicibletas
//URL: http://localhost:4000/bikes/allBikes


router.get("/allBikes", (req, res)=>{
    //llamad a base de datos
    let sql = 'SELECT * FROM bike'
    connection.query(sql, (error, result)=>{
        if(error){
            throw error;
        }else{
            console.log("*********************", result);
            res.render("allBikes", { bikes: result });
        }
    });
})

//nos manda la vista con el formulario de creación de una bici
//http://localhost:4000/bikes/formAddBike
router.get('/formAddBike', (req, res)=>{
    res.render("formNewBike")
})




//recibe la información del formulario de añadir bici
//http://localhost:4000/bikes/newBike
router.post('/newBike', uploadFile("bikes"), (req, res)=>{
    console.log("**** req.body", req.body);
    console.log("***** req.file", req.file);
    const { brand, model, price, type } = req.body;
    
    //SQL PARAMETRIZADAS; SON MAS SEGURAS Y PROFESIONALES
    
    
    //sql y values si NO hay foto
    let sql = `INSERT INTO 
    bike (brand, model, type, price) 
    VALUES (?,?,?,?);
    `
    let values = [brand, model, type, price]
    
    //sql y values si SI hay foto
    if(req.file != undefined){
        sql = `INSERT INTO 
        bike (brand, model, type, price, picture) 
        VALUES (?,?,?,?,?);
        `
        values.push(req.file.filename)
    }
    
    connection.query(sql, values, (error, result)=>{
        if(error){
            throw error;
        }else{
            res.redirect("/admin")
        }
    } )
    
})


//http://localhost:4000/bikes/oneBike
router.get('/oneBike/:id', (req, res)=>{
    const {id} = req.params;
    let sql = 'SELECT * FROM bike WHERE bike_id = ?'
    let value = id;
    connection.query(sql, value, (err, result)=>{
        if(err){
            throw err
        }else{
            console.log("***********************************", result);
            
            res.render("bikeProfile", {selectedBike: result[0]})
        }
    })
})

module.exports = router;



