let animal = new Array();
animal[0] = 'dog';
animal[1] = 'cat';
animal[2] = 'horse';
animal.length = 3;

let fruits = ['banana', 'strawberry', 'orange', 'apple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let item of fruits) {
    console.log(item);
}

// FUNÇÕES SOBRE ARRAYS
fruits.push('olive');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('lemon', 'pineapple');
console.log(fruits);

fruits.shift();
console.log(fruits);

let haveThisFruit = fruits.find((fruit) => fruit === 'orange');
console.log(haveThisFruit);

let position = fruits.indexOf('apple');
console.log(position);
