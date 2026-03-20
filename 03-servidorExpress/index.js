//requerir las librerías necesarias

const express = require('express');

//declaro el prueto por donde quiero que corra el servidor
//va a corres en la dirección ip: 127.0.0.1 o localhost (viene así configurado en express)
//elegimos 1 de los 64000 puertos que tiene localhost (3000 - 6000);

const port = 4000;

//creo la aplicación server (instancia de Express)
const app = express();

//middlewares

//1.- coinfiguración de la carpeta public como contenedora de archivos estáticos
app.use(express.static(__dirname + "/public"))




//endpoints ó URL ó rutas (las direcciones exactas que me responden con un recurso)
//en estos momentos solamente vamos a usar rutas GET(pedir recursos) y POST(traer al back datos para manipular esos datos en el back (guardar en bd, modificar, etc...))
//el endpoint lo genera un método get o post que acepta 2 parámetros: 
//  1.- el string con la ruta exacta 
//  2.- la función que se ejecutará cuando llegue una petición a dicha ruta

//el método de la respuesta send (res.send(string)) envía texto plano

//el método de la respuesta sendFile (res.sendFile(un string con el path o ruta)) envía un archivo

//endpoint que nos manda (sirve) el index.html
//url: http://localhost:4000/
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/html/index.html");
})

app.get('/about', (req, res)=>{
    res.sendFile(__dirname + "/html/about.html")
})

//url: http://localhost:4000/login
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/html/login.html")
})

app.get("/informacion", (req, res)=>{
    res.sendFile(__dirname + "/html/info.html")
})

//levanto el servidor
app.listen(port);
