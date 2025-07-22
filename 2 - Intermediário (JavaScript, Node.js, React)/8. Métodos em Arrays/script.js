let carrinho = [];

function adicionarProdutoCarrinho() {
    
    const qtdProduto = document.querySelector('#quantidade').value;
    const produto = document.querySelector('#nome-produto').value;
    const precoUnitario = document.querySelector('#preco').value;
    
    if (qtdProduto === '' || produto === '' || precoUnitario === '') {
        alert ('Não deixe nenhum campo em branco!')
        return
    }

    carrinho.push ({
        nome: produto,
        quantidade: qtdProduto,
        preco: precoUnitario
    });

    const tabela = document.querySelector('#carrinho-compras');
    tabela.innerHTML = ''; // limpa a tabela

    carrinho.forEach(item => {
        const novaLinha = document.createElement('tr');
        novaLinha.innerHTML = `
            <td>${item.nome}</td>
            <td class = "qtd">${item.quantidade}</td>
            <td>R$ ${item.preco * item.quantidade}</td>
        ` // Template strings

        tabela.appendChild(novaLinha);
    });

    // let total = 0;
    // for(let i = 0; i < carrinho.length; i ++){
    //     total = total + carrinho[i].preco * carrinho[i].quantidade;
    // }

    let total = carrinho.reduce((soma, item) => soma + (item.preco * item.quantidade), 0);

    document.querySelector('#total').textContent = `R$ ${total.toFixed(2)}`;
};

const btnEnviar = document.querySelector('#enviar-produto');
btnEnviar.addEventListener('click', adicionarProdutoCarrinho);

// TODOLIST

let tasks = [];

const form = document.querySelector('#form-tasks');
const list = document.querySelector('#task-list');

form.addEventListener('submit', (event) =>{
    const task = document.querySelector('#name-task').value;
    const level = document.querySelector('#level').value; 
    event.preventDefault(); // Evita que o forms seja atualizado


    const newTask = {name: task, order: level};

    tasks.push(newTask);

    const orderLevel = {alto: 1, medio: 2, baixo: 3};
    tasks.sort((a, b) => {
        return orderLevel[a.order] - orderLevel[b.order];
    });

    list.innerHTML = '';
    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - ${task.order}`;
        list.appendChild(li);
    });
});
