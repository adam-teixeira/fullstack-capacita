// Função nomeada
function somarValores(a, b){
    return a + b;
}
let resultado = somarValores(3, 2);
console.log(resultado);

// Função anonima
let somarValoresAnonimo = function(a, b){
    return a + b;
}
resultado = somarValoresAnonimo (10, 20);
console.log(resultado);

//  Função arrow
let somarValoresArrow = (a, b) => {
    return a + b;
}
resultado = somarValoresArrow(4, 2);
console.log(resultado);