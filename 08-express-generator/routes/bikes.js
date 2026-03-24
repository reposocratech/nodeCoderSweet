const express = require('express');
const router = express.Router();
const connection = require('../config/db')

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

module.exports = router;
