for (let y = 1; y <= 10; y++){
    console.log(y);
}


//tabuada
let prompt = require('prompt-sync')();
let tabuada = parseInt(prompt('Qual tabuada você deseja ver? '))

for (let num = 1; num <= 10; num++){
    console.log(tabuada + ' x ' + num + ' = ' + tabuada * num);
}


//par ou ímpar
let valores = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < valores.length; i++){
    if (valores[i] % 2 === 0){
        console.log ('O Valor ' + valores[i] + ' é par');
    }else{
        console.log ('O Valor ' + valores[i] + ' é ímpar');
    }
}