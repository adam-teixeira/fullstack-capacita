const prompt = require('prompt-sync')();

let nota1 = parseFloat (prompt('Digite a nota da 1º prova: '));
let nota2 = parseFloat (prompt('Digite a nota da 2º prova: '));

let media = (nota1 + nota2) / 2;

console.log('A média é: ' + media);

//Se a média for maior ou igual a 7, o aluno é aprovado.
//Se a média for menor que 4, o aluno é reprovado.
//Se a média for entre 4 e 7, ele fica de Final.

//decisão alinhada
if(media >= 7.0) {
    console.log('Aprovado');
}
if (media < 4.0) {
    console.log('Reprovado');
}
if (media >= 4 && media < 7.0){
    console.log('Está de Final');
}