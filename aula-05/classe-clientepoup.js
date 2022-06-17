class Cliente {
  constructor(nome,email,cpf,saldo){
   this.nome = nome;
   this.email = email;
   this.cpf = cpf;
   this.saldo = saldo;
  }

  depositar(valor){
      this.saldo += valor;
  }

  exibirSaldo(){
      console.log(this.saldo);
  }
}

class ClientePoupanca extends Cliente{
  constructor(nome,email,cpf,saldo,saldoPoupanca){
    super(nome,email,cpf,saldo);
    this.saldoPoupanca = saldoPoupanca;
  }

  depositarPoupanca(valor){
    this.saldoPoupanca += valor;
  }
}

const joao = new ClientePoupanca("Joao","Joao@gmail.com","62425244",100,200);

console.log(joao);

joao.depositar(50);
joao.depositarPoupanca(50);

console.log(joao);