const funciones =  require("./utils.js");
const nombres = require("./data.js");


let { saludar, saludar2 } = funciones;


console.log(saludar(nombres[1]));
console.log(saludar2("santi"));

