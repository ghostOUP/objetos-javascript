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

const joao = new Cliente("Joao","joao@email.com","116262656344",100);

joao.exibirSaldo();

console.log(joao);