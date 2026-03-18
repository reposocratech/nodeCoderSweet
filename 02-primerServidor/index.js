//este es el archivo donde creamos el servidor

//requerimo express(la librería que hemos instalado para hacer servidores)
const express = require('express');

//creo la instancia de la aplicación servidora
const app = express();

//defino el puerto por el cual quiero que levante mi servidor dentro del host localhost o 127.0.0.1
const port = 4000;

//endpoints o rutas (son las direcciones a donde el navegador tiene que hacer las peticiones)

//mandar la página de inicio de mi web
//URL completa: "http://localhost:4000"
app.get("/", (req, res)=>{
    res.send("Esta es la página home")
})

//mandar un saludo
//url completa: http://localhost:4000/saludar
app.get("/saludar", (req, res)=>{
    res.send("Hola, bienvenid@s a vuestro primer server");
})


//levanta el servidor en localhost:4000 o 127.0.0.1:4000
app.listen(port, ()=>{console.log(`Corriendo por el puerto ${port}`);
});

