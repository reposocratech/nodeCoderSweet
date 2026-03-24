const express = require('express');
const router = express.Router();
const path = require('path');

//http://localhost:4000/products/products
router.get('/products', (req, res)=>{
    res.sendFile(path.join(__dirname, '../html/productos.html'))
})


module.exports = router;