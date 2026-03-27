//este archivo contiene la lógica que hace que la petición post de un formulario
//realizae una copia del archivo en la carpeta public del server y
//deje pasar al controlador los datos de los inputs tipo text dentro de req.body
//y los datos del archivo los pasa en req.file

const multer = require('multer');

let uploadFile = (folder) =>{
    // configurar donde y cómo se van a guardar los archivos

    const storage = multer.diskStorage({
        destination: `public/images/${folder}`,
        filename: (req, file, cb)=>{
            let originalName = file.originalname;
            let newFileName = Date.now()+ "-" + originalName
            cb(null, newFileName)
        }
    })

    const upload = multer({ storage: storage}).single("img");

    return upload;
}

module.exports = uploadFile;