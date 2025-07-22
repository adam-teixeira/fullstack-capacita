const prompt = require('prompt-sync')();

const genero = prompt('Insira seu gênero (M/F): ');
const peso = parseFloat (prompt('Insira seu peso: '));
const altura = parseFloat (prompt('Insira sua altura: '));

let imc = peso / Math.pow(altura, 2);

console.log('seu IMC é: ' + imc.toFixed(2));

// Faça um programa que calcule o IMC e o peso ideal de uma pessoa com base em seu gênero (masculino/feminino). 
// Peso Ideal: Masculino: 72.7 * altura - 58 
// Peso Ideal: Feminino: 62.1 * altura - 44.7


//decisão switch case
switch (genero){
    case "M","m":
        var pesoideal = 72.7 * altura - 58;
        console.log('O peso ideal masculino é: ' + pesoideal.toFixed(2));
    break;

    case "F","f":
        var pesoideal = 62.1 * altura - 44.7;
        console.log('O peso ideal feminino é: ' + pesoideal.toFixed(2));
    break;

    default:
        console.log('Gênero não encontrado')
}
