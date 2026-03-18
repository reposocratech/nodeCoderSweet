//callback : una función que se pasa como argumento a otra función, la cual se ejecuta dentro de la función madre

const mandarPeticion = (peticion, callback) =>{

    //proceso la petición
    let req = `He ido a comprar ${peticion}`

    const response = callback(req)
    return response
}


let res1 = mandarPeticion("frutas", (frase)=>{
    return frase.toUpperCase();
})

let res2 = mandarPeticion("pan", (frase)=>{
    return frase + " a la panadería"
})



console.log(res1);
console.log(res2);







// const resultddd = mandarPeticion("periodico", (peticion)=>{
//     let res = `he ido al kiosco y te he comprado ${peticion}`
// });




console.log(resultddd);

























// const pasarAmayusc = (txt) => {
//     return txt.toUpperCase();
// }
// const pasarAminusc = (txt) => {
//     return txt.toLowerCase();
// }


// const quitarEspacios = (txt) =>{
//     return txt.split(" ").join("");
// }


// const procesarTexto = (texto, callback) =>{
//     let textoModificado = callback(texto);
//    return textoModificado
// }

// //caso 1: usar procesarTexto para convertir todo el texto a mayusculas

// console.log(procesarTexto("Hola mundo", pasarAmayusc));

// //caso 2: usar procesarTexto para convertir todo el texto a minusculas
// console.log(procesarTexto("HOLA mundo", pasarAminusc));

// //caso 3: usar procesarTexto para convertir todo el texto en una sola cadena sin espacios
// console.log(procesarTexto("que pasa colega la la la", quitarEspacios));

// let result = procesarTexto();


// const numeros = [3,45,67,89,34,56]

// //filtrar los numeros mayores de 5
// const res = numeros.filter(function(e){
//     return e > 5;
// });
// const res2 = numeros.filter(function(e){
//     return e > 25;
// });



