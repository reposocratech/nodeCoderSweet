class UserController{

    register = (req, res) =>{
        console.log("reeqwqq . booodddyyy", req.body);
        //validar los campos
        res.send("hola");
    }
}

module.exports = new UserController();
