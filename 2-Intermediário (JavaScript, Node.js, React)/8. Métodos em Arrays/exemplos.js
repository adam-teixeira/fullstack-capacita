// FILTER
let idade = [12, 24, 16, 57, 38];

let adultos = idade.filter((
    idade => {return idade >= 18;}
))

console.log(adultos);
console.log(idade);


// MAP
let numbers = [66, 52, 45, 24];
let newArray = numbers.map(multiplica);

function multiplica(num){
    return num * 10;
}
console.log(newArray);


//MAP X FILTER
let pares = idade.map((item) => {
    return item * 11;
}).filter((item) => {
    return item % 2 ===0;
});

console.log(pares);

//REDUCE
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0); 
console.log(result);

const foguetes = [
    { país: 'Rússia', lançamentos: 32 },
    { país: 'Estados Unidos', lançamentos: 24 },
    { país: 'China', lançamentos: 17 },
    { país: 'França', lançamentos: 10 },
    { país: 'Japão', lançamentos: 6 }
];
const totalLançamentos = foguetes.reduce((soma, elemAtual) => soma + elemAtual.lançamentos, 0);
console.log(totalLançamentos); // 89

// FOREACH
let total = 0;
foguetes.forEach((foguete) => {
    total += foguete.lançamentos;
    // total = total + foguete.lançamentos;
});
console.log(total); // 89

// FIND
let produtos = [
    { nome: 'banana', quantidade: 5 },
    { nome: 'maçã', quantidade: 0 },
    { nome: 'laranja', quantidade: 3 },
    { nome: 'uva', quantidade: 2 }
];
 
let produtoEncontrado = produtos.find((item) => {
    return item.nome === 'laranja'});

console.log(produtoEncontrado);

