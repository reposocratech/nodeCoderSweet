const express = require('express');
const router = express.Router();
const connection = require('../config/db');
const uploadFile = require('../middlewares/uploadFile');


//sirve la página que muestra el catálogo de bicibletas
//URL: http://localhost:4000/bikes/allBikes

router.get("/allBikes", (req, res)=>{
    //llamad a base de datos
    let sql = 'SELECT * FROM bike WHERE is_deleted=0'
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


//http://localhost:4000/bikes/oneBike/44
router.get('/oneBike/:id', (req, res)=>{
    const {id} = req.params;
    let sql = 'SELECT * FROM bike WHERE bike_id = ? AND is_deleted=0'
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

//borrado definitivo de una bicicleta
router.get('/delBike/:id', (req, res)=>{
    const { id } = req.params;
    let sql = 'delete from bike WHERE bike_id = ?'
    connection.query(sql, [id], (err, result)=>{
        if(err){
            throw err;
        }else{
            res.redirect('/admin');
        }
    })
})

//borrado lógico de una bicleta
router.get('/delLogicBike/:id', (req, res)=>{    
    const {id} = req.params;
    let sql = 'UPDATE bike SET is_deleted=1 WHERE bike_id = ?'
    connection.query(sql, [id], (err, result)=>{
        if(err){
            throw err
        }else{
            res.redirect('/admin')
        }
    })
    })

//abrir el formulario de edición
router.get('/updateBike/:bike_id', (req, res)=>{
    const { bike_id } = req.params;
    let sql = 'SELECT * FROM bike WHERE bike_id = ? AND is_deleted = 0'

    connection.query(sql, [bike_id], (err, result)=>{
        if(err){
            throw err
        }else{
            console.log("rreeeesssuulltt", result);
            
            res.render('formUpdateBike', {bike: result[0]});
        }
    })
})

//recoge los datos del formulario de edición
router.post('/updateBike/:bike_id', uploadFile("bikes"), (req, res)=>{
    const { bike_id } = req.params;
    const { brand, model, price, type } = req.body;
    
    let sql = 'UPDATE bike SET brand=?, model=?, price=?, type=? WHERE bike_id=?'
    let values = [ brand, model, price, type, bike_id ]
    
    if(req.file){
        sql = 'UPDATE bike SET brand=?, model=?, price=?, type=?, picture=? WHERE bike_id=?'
        values = [brand, model, price, type, req.file.filename, bike_id ]
    }

    connection.query(sql, values, (err, result)=>{
        if(err){
            throw err
        }else{
            res.redirect('/admin');
        }

    })
})
module.exports = router;



