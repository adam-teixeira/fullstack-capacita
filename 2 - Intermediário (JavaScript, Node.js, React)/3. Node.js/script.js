console.log('Cálculo de média aritimética');

const prompt = require('prompt-sync')();

let nota1 = parseFloat (prompt('Digite a nota da 1º prova: '));
let nota2 = parseFloat (prompt('Digite a nota da 2º prova: '));

let media = (nota1 + nota2) / 2

console.log('A média é: ' + media.toFixed(2));
