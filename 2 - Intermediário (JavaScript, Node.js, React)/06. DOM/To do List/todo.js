function adicionarTarefa(){
    const tarefa = document.querySelector("#nova-tarefa");

    if (tarefa.value === '') {
        alert ('Não deixe esse campo em branco!')
        return
    }
    
    const novoItem = document.createElement('li');
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover'
    btnRemover.onclick = function(){
        novoItem.remove();
    }
    
    novoItem.appendChild(document.createTextNode(tarefa.value));
    novoItem.appendChild(btnRemover);
    
    const lista = document.querySelector('#lista-tarefas');
    lista.appendChild(novoItem);

    tarefa.value = '';
}

const btnEnviar = document.querySelector('#btn-enviar');

btnEnviar.addEventListener('click', adicionarTarefa);