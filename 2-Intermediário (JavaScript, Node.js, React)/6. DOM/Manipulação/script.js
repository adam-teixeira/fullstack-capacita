// por id
function adicionarCarrinho(){
    let produto = prompt('Digite um produto.');

    if(produto === ''){ //tratamento de entrada de dados
        alert('Digite um produto válido.')
        return; 
    }

    const carrinho = document.getElementById ('carrinho');
    const pElemento = document.createElement('p');
    pElemento.textContent = produto;
    carrinho.appendChild(pElemento);
}
const btnAdicionar = document.getElementById ('btn-adicionar');
btnAdicionar.addEventListener ('click', adicionarCarrinho);


// por tag
const divContents = document.getElementsByTagName('article');
for(let i = 0; i < divContents.length; i++){
    if (i % 2 === 0) {
    divContents[i].style.backgroundColor = '#ccc';
    }
}

// por classe
const classContents = document.getElementsByClassName("segundo");
for (let i = 0; i < divContents.length; i++) {
  classContents[i].style.backgroundColor = "blanchedalmond";
}

// por seletor
let newContent = prompt('Digite o novo texto');
const firstDiv = document.querySelector("div.terceiro");
firstDiv.textContent = newContent;

const cards = document.querySelectorAll("div.terceiro");
for (let i = 0; i < cards.length; i++){
    cards[i].style.background = '#ccc';
}