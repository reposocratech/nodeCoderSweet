const utilidadesMath = require('./modules/utilsMath');

const utilsText = require('./modules/utilsText')

//destructuring

const {sumar, restar, multiplicar, dividir} = utilidadesMath;

const {mayusc, minusc} = utilsText;

console.log(utilidadesMath.sumar(10, 66));
console.log(utilidadesMath.restar(10, 66));
console.log(utilidadesMath.dividir(10, 66));
console.log(utilidadesMath.multiplicar(10, 66));

console.log(mayusc("lalalala"));
console.log(minusc("ASDASDlklkASDASDAsllñklkk"));


console.log(sumar(40, 50));
console.log(restar(40, 50));
console.log(multiplicar(40, 50));
console.log(dividir(40, 50));
