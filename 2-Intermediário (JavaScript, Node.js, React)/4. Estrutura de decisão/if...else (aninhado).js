const prompt = require('prompt-sync')();

const nota1 = parseFloat (prompt('Nota 01: '));
const nota2 = parseFloat (prompt('Nota 02: '));

let media = (nota1 + nota2) / 2;

console.log('A média é: ' + media);

//Se a média for maior ou igual a 7, o aluno é aprovado.
//Se a média for menor que 4, o aluno é reprovado.
//Se a média for entre 4 e 7, ele fica de Final.


//decisão aninhada
if (media >= 7.0) {
    console.log('Aprovado')
} else {
    if (media < 4.0) {
        console.log('Reprovado');
    }else{
        console.log('Está de Final');
    }
}