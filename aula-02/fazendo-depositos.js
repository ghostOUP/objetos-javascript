const cliente = {
  nome: 'Joao',
  idade: 36,
  cpf: '162626262626',
  email: 'joao@email.com',
  fones: [ '5737373498', '5526262643124' ],
  dependentes: [
    {
      nome: 'Sara Silva',
      parentesco: 'filha',
      dataNasc: '20/03/2011' },
    {
      nome: 'Samia Maria',
      parentesco: 'filha',
      dataNasc: '04/01/2014'
    }
  ],
  saldo:100,
  depositar:function(valor){
    this.saldo += valor;
  }
}

console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);