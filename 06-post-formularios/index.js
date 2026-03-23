const express = require('express');
const indexRoutes = require('./routes/index.router');
const userRoutes = require('./routes/users.router')

const port = 4000;
const app = express();

//principio de unica responsabilidad

//middlewares
app.use(express.static(__dirname + "/public"));

//esta línea permite que las request puedan traer datos de los formularios
app.use(express.urlencoded( {extended: false} ));

app.use("/", indexRoutes);
app.use("/user", userRoutes);

app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`));
