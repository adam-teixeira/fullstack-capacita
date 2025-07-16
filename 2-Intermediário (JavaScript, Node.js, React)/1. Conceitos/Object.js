const prod1 = {} //cria um obj vazio

prod1.nome = 'celular ultra mega' //chave 'nome' com valor 'celular...'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //chave com espaço, evitar
prod1[""] = "Mesmo uma string vazia"

console.log(prod1)

const prod2 = {
    nome: 'camiseta polo',
    preco: 79.87,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)