// Polimorfismo: uma forma de fazer métodos se comportarem de maneira diferente

// Superclass, classmae, classpai
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}
Conta.prototype.sacar = function(valor) {
  if (valor > this.saldo) {
    console.log(`Saldo insuficiente: ${this.verSaldo()}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/ ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
};
// const conta1 = new Conta(3566, 314498, 1000);
// conta1.depositar(100)
// conta1.depositar(50)
// conta1.sacar(500);

// Conta corrente
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if (valor > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: ${this.verSaldo()}`);
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc = new ContaCorrente(3566, 314498, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

// Conta Poupança
function ContaPoupança(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
};
ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const cp = new ContaPoupança(12, 33, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(1);



