//commonJs -- javaScript antiguo -- este es el que vamos a estudiar con node en
//el trabajo con módulos ( exportación e importacion de módulos)

//ecma6 -- javaScript moderno -- lo palicaremos en react


let saludar = (text) =>{
    return `Hola ${text}`;
}

let saludar2 = (text) =>{
    return `Que pasa, ${text}`
}

module.exports = {
               saludar,
               saludar2
            } 

console.log(module);

