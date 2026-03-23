const express = require('express');
const router = express.Router();

//abre el home
//http://localhost:4000/
router.get("/", (req, res)=>{
    res.sendFile(__dirname + "/html/index.html");
})

//http://localhost:4000/about
router.get("/about", (req, res)=>{
    res.send("Estoy en about")
})

//http://localhost:4000/dondeEstamos
router.get("/dondeEstamos", (req, res)=>{
    res.send("Estoy en donde Estamos")
})

module.exports = router;