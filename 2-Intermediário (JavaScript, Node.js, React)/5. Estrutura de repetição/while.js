let y = 1;

while(y <= 10){
    console.log(y);
    y++;
}


//tabuada
let prompt = require('prompt-sync')();
let tabuada = parseInt(prompt('Qual tabuada você deseja ver? '))

let num = 1;
while(num <= 10){
    console.log(tabuada + ' X ' + num + " = " + tabuada * num)
    num++
}


//par ou ímpar
let valores = [1,2,3,4,5,6,7,8,9,10];

let i = 0;
while(i < valores.length){
    if(valores[i] % 2 === 0){
        console.log ('O Valor ' + valores[i] + ' é par');
    }else {
        console.log ('O Valor ' + valores[i] + ' é ímpar');
    }
    i++
}
