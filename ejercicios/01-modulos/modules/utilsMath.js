const sumar = (a, b) =>{
    return a+b;
}

const restar = (a,b) =>{
    return a-b;
}

const multiplicar = (a,b) => a*b;

const dividir = (a, b) => a/b;

// module.exports = {
//     sumar,
//     restar,
//     multiplicar,
//     dividir
// }

module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;

