var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  //llamada  abse de datos
  //lista de las bicicletas
  let nombre = "Pepito"
  res.render('index', { titulo: "Me encanta ejs", nombre:nombre });
});

module.exports = router;
