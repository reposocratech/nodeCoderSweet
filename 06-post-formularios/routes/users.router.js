const express = require('express');
const router = express.Router();

//http://localhost:4000/user/login
router.get("/login",(req, res)=>{
    res.send("Estoy en login")
})

//http://localhost:4000/user/register
router.get("/register", (req, res)=>{
    res.sendFile(__dirname + "/html/register.html");
})

//endpoint creado para recibir los datos del formulario
//los datos de un formulario vienen en req.body
//http://localhost:4000/user/regiter
router.post("/register", (req, res)=>{
    console.log(req.body);
    const {user_name, user_lastname, user_email, password, rep_pass} = req.body;

    if(password !== rep_pass){
        res.send("Registro no efectuado porque las contraseñas no coinciden")
    }else if(user_name===""||user_email===""){
        res.send("Registro no efectuado porque nopmbre o email están vacíos")
    }else{
        //llamada abd para guardar el usuario
        res.send("he recibido los datos!!!! y se ha guardado correctamente el usuario " + user_name + " " + user_lastname)
    }
})

module.exports = router;