//BOOLEAN
console.log('\nBOOLEAN:')

let isAtivo = false //isativo é declarado como falso
console.log(isAtivo)

isAtivo = true //mudamos o valor para true
console.log(isAtivo)

isAtivo = 1 //num dif. de 0 são true
console.log(isAtivo) //mostra o num 1
console.log(!isAtivo) //nega o true, mostra false
console.log(!!isAtivo) //nega a negação, mostra true

//são valores verdadeiros:
console.log(!!' ') //espaço em branco
console.log(!![]) //array vazio
console.log(!!{}) //objeto vazio
console.log(!!Infinity) //tipo
console.log(!!(isAtivo = 33)) //atribuição, se for um valor "resolvivel"

//são valores falsos
console.log(!!0)
console.log(!!'') //espaço vazio
console.log(!!null) 
console.log(!!NaN) //not a number
console.log(!!undefined) 
console.log(!!(isAtivo = false)) //atribuição, se não for um valor "resolvivel"

//outras considerações
console.log('' || null || 0 || 'epa') //retorna o primeiro valor verdadeiro

let nome = ''
console.log(nome || 'Desconhecido') //se o nome estiver vazio, então imprima "desconhecido"



//ARRAY
console.log('\nARRAY:')

const valores = [7.7, 9.6, 5.0, 9.2]
console.log(valores)

console.log(valores[0], valores[4])
console.log(valores)

valores[4]= 10 //insere um valor no indice 4
valores.push({id: 3}, false, null, 'teste', 4) //incluir no array
console.log(valores)
console.log(valores.length)

console.log(valores.pop()) //excluir o último valor do array
delete valores[7] //exclui o indice 7
console.log(valores)

console.log(valores.length) //mostra quantos elementos tem

console.log(typeof valores)