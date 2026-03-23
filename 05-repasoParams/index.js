const express = require('express');
const port = 4000; //3000-6000


let simpsons = [
    {
        name: "bart",
        age: 12,
        desc: "muy malo",
        foto1: "bart.jpg",
        foto2: "BartAdulto.webp"
    },
    {
        name: "lisa",
        age: 10,
        desc: "muy buena",
        foto1: "lisa.jpg",
        foto2: "lisaAdulta.jpg"
    },
    {
        name: "marge",
        age: 35,
        desc: "madre",
        foto: "marge.jpg"
    },
    {
        name: "homer",
        age: 45,
        desc: "es mu glotón",
        foto: "homer.jpg"
    },
    {
        name: "maggie",
        age: 2,
        desc: "es un bebe",
        foto: "maggie.jpg"
    },
]


const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + '/html/index.html');
})

app.get("/profile/:nombre", (req, res)=>{
    const {nombre} = req.params;
    console.log(nombre);

    let selectedCharacter = simpsons.find(elem=>elem.name === nombre);
    const {name, age, desc, foto} = selectedCharacter;
    
    let texto = `<!DOCTYPE html>
                    <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                <body>
                    <h2>Profile</h2>
                    <h3>nombre: ${name}</h3>
                    <h3>edad: ${age} años</h3>
                    <h3>Descripción: ${desc}</h3>
                    <img src="/images/${foto}" alt="">
                    <button onclick="window.location.href='/'">volver</button>
                </body>
            </html>`


    res.send(texto)
})

app.get('/fotos/:name/:tipo', (req, res)=>{
    console.log("*********************", req.params);
    const {name, tipo} = req.params;
    const selected = simpsons.find(elem=>elem.name===name);

    let foto = "";
    if(tipo === "1"){
        foto = selected.foto1
    }else{
        foto = selected.foto2
    }
    
    let text = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Document</title>
                    </head>
                <body>
                    <img src="/images/${foto}" alt="">
                    <button onclick="window.location.href='/'">volver</button>
                </body>
</html>`
    res.send(text)
})

app.get('/producto/ofertas', (req, res)=>{
    res.send("estoy en ofertas")
})

app.get('/producto/:id', (req, res)=>{
    res.send("Estoy en producto")
})


app.listen(port, console.log("Corriendo por el " + port));





