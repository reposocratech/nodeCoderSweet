const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) =>{
    //verificar si la req trae token (que va a venir en los headers de la request req.headers)
    // por convención, el token viene siempre en headers y precedidos de Bearer 
    
    if(!req.headers.authorization){
        res.status(401).json({message: "no autorizado (falta el authorization)"})
    }else{
        let token = req.headers.authorization.split(" ")[1];
        if(!token){
            res.status(401).json({message: "no autorizado (falta el token detras del bearer)"})
        }else{
            console.log(token);
            jwt.verify(token, "patata",(err, result)=>{
                if(err){
                    console.log("eerrooorrr", err);
                    
                    res.status(401).json({message: "no autorizado (token malformado o caducado o no coincide la palabra secreta)"})
                }else{
                    console.log("payloaddd", result);
                    next();
                }
            });
        }
    }
}

module.exports = verifyToken;