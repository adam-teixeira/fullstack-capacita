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

    let total = 0;
    for(let i = 0; i < carrinho.length; i ++){
        total = total + carrinho[i].preco * carrinho[i].quantidade;
    }

    document.querySelector('#total').textContent = `R$ ${total.toFixed(2)}`;
};

const btnEnviar = document.querySelector('#enviar-produto');
btnEnviar.addEventListener('click', adicionarProdutoCarrinho);