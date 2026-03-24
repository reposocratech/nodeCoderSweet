const express = require('express');
const port = 4000;

const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/funkos", (req, res)=>{
    res.sendFile(__dirname + "/html/funkos.html");
})

app.get("/juegos", (req, res)=>{
    res.sendFile(__dirname + "/html/juegos.html");
})
app.get("/comics", (req, res)=>{
    res.sendFile(__dirname + "/html/comics.html");
})

app.get("/producto/:tipo/:nombreProducto/:precio", (req, res)=>{
    console.log(req.params);
    const {tipo, nombreProducto, precio} = req.params;

    res.send(`El producto que has elegido es de tipo ${tipo}, el nombre del producto es ${nombreProducto} y vale ${precio} Euros`)
});

//parámetro query
app.get("/oneComic/:tipo/:nombreProducto", (req, res)=>{
    console.log("params", req.params);
    console.log("querys", req.query);

    const {tipo, nombreProducto} = req.params;

    const {precio} = req.query;

    if(precio){
        res.send(`El producto que has elegido es de tipo ${tipo}, el nombre del producto es ${nombreProducto} y vale ${precio} Euros`)
    }else{
        res.send(`El producto que has elegido es de tipo ${tipo}, el nombre del producto es ${nombreProducto} y el precio está por determinar`)

    }
});

app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`));
