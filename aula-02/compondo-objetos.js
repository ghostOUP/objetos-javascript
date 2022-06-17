const cliente = {
  nome:"Joao",
  idade:36,
  cpf:"692962962",
  email:"joao@email.com",
  fones:["5573737373498","6262626262"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);