const nome = "Adam"
const contatenacao = 'Olá ' + nome + "! Como vai?"
const template = `
Olá ${nome}!
Como vai?`

console.log(contatenacao, template)

console.log(`1 + 1 =  ${1 + 1}`) //dentro de ${} ele vai ler

const up = texto => texto.toUpperCase() //letras maiúsculas
console.log(`Ei... ${up(nome)}!`)
console.log(`Ei... ${up('cuidado!')}`)

//