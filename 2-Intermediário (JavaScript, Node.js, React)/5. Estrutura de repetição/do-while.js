let y = 1;

do {
    console.log(y);
    y++
} while(y <= 10);


//tabuada
let prompt = require('prompt-sync')();
let tabuada = parseInt(prompt('Qual tabuada você deseja ver? '))

let num = 1;
do{
    console.log(tabuada + ' x ' + num + ' = ' + tabuada * num);
    num++
}while(num <= 10);


//par ou ímpar
let valores = [1,2,3,4,5,6,7,8,9,10];

let i = 0;
do{
    if (valores[i] % 2 === 0) {
        console.log ('O Valor ' + valores[i] + ' é par');
    }else{
        console.log ('O Valor ' + valores[i] + ' é ímpar');
    }
    i++
}while(i < valores.length);