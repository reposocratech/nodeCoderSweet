const express = require('express');
const path = require('path');

const router = express.Router();


//http://localhost:4000/
router.get("/", (req, res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../html/index.html"));
})

//http://localhost:4000/about
router.get("/about", (req, res)=>{
    res.sendFile(path.join(__dirname, "../html/about.html"));
})

51

module.exports = router;