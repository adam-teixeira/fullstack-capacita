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
let result = arr.reduce((sum, current) => sum + current, 0); 

console.log(result);