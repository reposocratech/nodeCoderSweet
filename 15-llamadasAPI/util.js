const { log } = require('console');
const fs = require('fs');

const path = require('path');

const deleteFile = (file, folder) =>{
    console.log(folder);
    
    const filePath = path.join(__dirname, '/images', folder, file);
    console.log("***************", filePath);
    

    fs.unlink(filePath, (errFile)=>{
        if(errFile){
            console.log(errFile);
        }else{
            console.log("eliminación ok")
        }
    })
}

module.exports = deleteFile;