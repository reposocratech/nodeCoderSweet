const {ZodError} = require('zod');

const validateForm = (schema) => (req, res, next) => {
    try {
       //verificación
       schema.parse(req.body);
        
       next();
    } catch (err) {
        //si el error viene de la validación
        if(err instanceof ZodError){
            res.status(400).json({
                           error: err.issues.map((e)=>({
                            path: e.path[0],
                            message: e.message
                           }))
            })
        }else{
            res.status(400).json({
                            message: "algo ha pasado",
                            error:err.message
                        })
        }   
    }
}

module.exports = validateForm;
