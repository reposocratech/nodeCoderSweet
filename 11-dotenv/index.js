const express = require('express');


//requerimiento de dotenv y llamada al método config
// const dotenv = require('dotenv');
// dotenv.config();

//refactorizado
require('dotenv').config();


//desarrollo 4000
//pre-produccion 6789
//producción  5000


const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({extended: false}));

// console.log(process.env);


app.get("/", (req, res)=>{
    //select * from users
    let result = [
        {user_id: 1, name:"pepe"},
        {user_id: 2, name:"pepa"},
        {user_id: 3, name:"Maria"},
    ]
    res.status(206).json(result)
})

app.post("/users/newUser", (req, res)=>{
    console.log(req.body);
    const {name, lastname, email, password} = req.body;
    //validar
    if(!name || !lastname ||!email ||!password){
        res.status(400).json({"message": "Hay algún campo vacío"})
    }else{
        res.status(200).json({"message": "guardado ok"})
    }
    
})


app.listen(port, ()=>{console.log(`Corriendo por el puerto ${port}`)});