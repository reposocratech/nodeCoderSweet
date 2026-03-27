var express = require('express');
const connection = require('../config/db');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
    const nombre = "Pepito"
    res.render('index', {nombre});

});

//devuelve la vista about
//http://localhost:4000/about
router.get("/about", (req, res)=>{
  res.render("about")
});


module.exports = router;
