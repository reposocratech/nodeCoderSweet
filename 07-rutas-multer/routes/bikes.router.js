//requiro la librería express
const express = require('express');
//creo un enrutador gracias al método Router()
const router = express.Router();

//http://localhost:4000/bike/newBike
router.get("/newBike", (req, res)=>{
    res.send("formulario")
    // res.sendFile(__dirname + "/html/formNewBike.html");
})


module.exports = router;



