const express = require('express');
const port = 4000;


const tienda = [
    {
        id: 1, 
        nombre: "Zapatos",
        pvp: 10,
        desc: "Unas botas de diseño fantasia maravillosas.",
        talla: "pequeña"
    },
    {
        id: 2, 
        nombre: "Camiseta",
        pvp: 20,
        desc: "Una camiseta superfresquta para el verano.",
        talla: "xxl"
    },
    {
        id: 3, 
        nombre: "Pantalón",
        pvp: 140,
        desc: "Unos pantalones de Chuck Norris.",
        talla: "pequeña"
    }
]



const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/html/index.html");
});

app.get('/productos', (req, res)=>{
    res.sendFile(__dirname + "/html/productos.html")
})

//ruta dinámica que tiene un PARAMETRO DINÁMICO (:id)
//http://localhost:4000/producto/kjhasdlkfhkasldh

//APRENDER QUE LA REQUEST (REQ) TIENE HEADERS(CABECERA), BODY (CUERPO), PARAMS, QUERYS

//req.headers = trea al back información (permisos y seguridad) de la request (petición)
//req.body = trae al back datos desde el front (formularios, etc...)
//req.params = trae al back los parámetros dinámicos de la petición (solo en rutas dinámicas)
//req.query = trae al back los parámetros querys ( filtros )

app.get('/producto/:id', (req, res)=>{
    const {id} = req.params;
    console.log("------------------------", id);
    console.log(typeof(id));
    
    
    // == igual(valor)
    // === estrictamente igual(valor y tipo)
    // let result = tienda.find((prod)=>{
        //                             return prod.id === id
        //                         });
        
        // let result = tienda.find(function(prod){
            //                             return prod.id === id
            //                         });
            
    let result = tienda.find(prod=>prod.id === Number(id));
    // let result = tienda.find(prod=>prod.id === parseInt(id));

    console.log("22222222222222222222", result);
    const {nombre, pvp, desc, talla} = result;
    
        
    res.send(`La página de información 
            del producto: nombre: ${nombre}, descripción: ${desc},
            talla: ${talla} y el precio: ${pvp}`);
})

app.get("/clientes/:nombre/:apellido", (req, res)=>{
    console.log("*******************************", req.params);
    const {nombre, apellido} =req.params;
    
    res.send(`clientes: ${nombre} ${apellido}`)
})

app.listen(port, ()=>console.log(`Corriendo por el puerto ${port}`));
