const express = require('express');
const port  = 4000;

const indexRoutes = require('./routes/index.router')
const bikeRoutes = require('./routes/bikes.router')
const productsRoutes = require('./routes/products.router')
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded( {extended:false} ));

//http://localhost:4000
app.use('/', indexRoutes)

//http://localhost:4000/bike
app.use('/bike', bikeRoutes)

//http://localhost:4000/products
app.use('/products', productsRoutes)

app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`));




//posibles entidades para crear rutas
//bicicletas
//usuario
//proveedor
//productos (accesorios, recambios)

//index (contiene las rutas que abren las páginas estáticas; home, about, where...)
