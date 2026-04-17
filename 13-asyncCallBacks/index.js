//los métodos sícronos tienen preferencia
//los métodos asinc van a una pila de ejecución (lista de espera) y se ejecutan por orden de entrada y después de ejecutar el código síncrono

const bycript = require('bcrypt');
const { log } = require('console');

const text= "lalala"
const text2= "lelele"
let resultado = "ppppp"

// bycript.hash(text, 16, (error, result)=>{
//     if(error){
//         console.log(error);
//     }else{
//         resultado=result;
//         console.log("El texto encriptado es: ", result);
//     }
// })

const hash2 = bycript.hash(text2, 14);

hash2
    .then((textHashed) =>{
        console.log(textHashed);
    })
    .catch((err)=>{
        console.log("ups, algo ha pasado");
    })























// for(let i=0;i<100000000000; i++){
//     res++
// }
// console.log(res);
