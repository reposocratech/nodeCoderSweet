const express = require('express');
const port=4000;

const app = express();

//middlewares
app.use(express.static(__dirname + "/public"));


//endpoints

//home
// URL:  http://localhost:4000
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/html/index.html");
})

//info
// URL:  http://localhost:4000/info
app.get("/info", (req, res)=>{
    res.sendFile(__dirname + "/html/info.html");
})

// aprende
// URL:  http://localhost:4000/cursos
app.get("/cursos", (req, res)=>{
    res.sendFile(__dirname + '/html/aprende.html')
})

//enlaces
// URL:  http://localhost:4000/enlaces
app.get("/enlaces", (req, res)=>{
    res.sendFile(__dirname + "/html/enlaces.html")
})



app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`))