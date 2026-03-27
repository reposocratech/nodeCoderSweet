const express = require('express');
const router = express.Router();
const connection= require('../config/db');

//abrir la página del admin
//http://loaclhost:4000/admin
router.get("/", (req, res)=>{
    let sql = 'SELECT * FROM bike'

    connection.query(sql, (err, result)=>{
        if(err){
            throw err
        }else{
            console.log(result);
            res.render("admin", {bikes: result})
        }
    })

})

module.exports = router;
