/*Imagine que sua mãe te deixou uma lista de tarefas para o dia. Você precisa, nessa ordem:

1. Andar com o cachorro.
2. Arrumar a cozinha.
3. Tirar o lixo pra fora.

Você não pode passar para a próxima tarefa se não concluir a atual.*/


/*function andarCachorro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Você passeou com o cachorro!');
        }, 1500);   
    });
};*/

function andarCachorro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let tarefaConcluida = true;

            if (tarefaConcluida) {
                resolve('Você passeou com o cachorro!');
            }else {
                reject('Você NÃO passeou com o cachorro.')
            }
        }, 1500);   
    });
};

function arrumarCozinha() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let tarefaConcluida = false;

            if (tarefaConcluida) {
                resolve('Você arrumou a cozinha!');
            } else {
                reject('Você NÃO arrumou a cozinha.')
            }
        }, 2500);
    });
};

function tirarLixo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let tarefaConcluida = true;

            if (tarefaConcluida) {
                resolve('Você tirou o lixo pra fora!');
            }else {
                reject('Você NÃO tirou o lixo.')
            }

        }, 1000);
    });
};

// USANDO PROMISES
andarCachorro()
  .then((value) => {
    console.log(value);
    return arrumarCozinha;
  })
  .then((value) => {
    console.log(value);
    return tirarLixo;
  })
  .then((value) => {
    console.log(value);
    console.log("Tarefas concluídas!");
  })
  .catch((error => console.error(error)
  ));


// USANDO ASYNC AWAIT
async function fazerTarefas(){
    try{
        const andarCachorroResultado = await andarCachorro();
        console.log(andarCachorroResultado);
    
        const arrumarCozinhaResultado = await arrumarCozinha();
        console.log(arrumarCozinhaResultado);
    
        const tirarLixoResultado = await tirarLixo();
        console.log(tirarLixoResultado);
    }
    catch(error){
        console.error(error);
    }
};

fazerTarefas();