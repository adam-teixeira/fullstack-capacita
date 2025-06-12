//NUMERIC
console.log('NUMERIC:')

const peso1 = 1.0 
const peso2 = Number('2.0') 

console.log(typeof peso1, typeof peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //mostra só 2 casas após a virgula
console.log(media.toString()) //converte pro valor original
console.log(media.toString(2)) //binário



//STRING
console.log('\nSTRING:')

const escola = "CODER"

console.log(escola.charAt(4)) //retorna a letra no índice 4
console.log(escola.charCodeAt(4)) //converte o indice 4 para a tabela ASCII
console.log(escola.indexOf ('E')) //mostra em qual índice a letra E está

console.log(escola.substring(1)) //mostra as letras a partir do índice 1
console.log(escola.substring(0,3)) //mostra as letras entre o índice 0 e 3, sem incluir o 3.

console.log('Bem vindo ao '.concat(escola).concat(' <3')) //junta palavras com a variável
console.log(escola.replace('E', '3')) //substitui onde tem E por 3

console.log('Ana... Maria'.split('...')) //cria um array separando os valores a cada ...
