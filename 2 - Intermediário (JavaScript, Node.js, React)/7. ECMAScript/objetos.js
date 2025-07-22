let professor = {}
professor.nome = "Adam";
professor.idade = 23
console.log(professor);

let livro = new Object();
livro["nome"] = "Harry Potter";
livro["autor"] = "J.K Holling";
console.log(livro);

var pessoa = {
  name: "Adam",
  age: 23,
};
pessoa.isValid = true;

for (attr in pessoa) {
  console.log(attr + " = " + pessoa[attr]);
}
