const cliente = {
  nome:"Joao",
  idade:36,
  cpf:"12543652266",
  email:"joao@email.com"
}

const chaves = ["nome","idade","cpf","email"];

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["conta"]);