// Manipulando prototypes

//new Object -> Object.prototype
const objA = {
  chaveA: 'A'
  //no navegador vem como _proto_ que é igual a Object.prototype
};

const objB = {
  chaveB: 'B'
  // _proto_: objA
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // Traz o objA como proto do objB
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveB);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco = this.preco - (this.preco * (percentual / 100));
}
Produto.prototype.aumento = function(percentual) {
  this.preco = this.preco + (this.preco * (percentual / 100));
}

const p1 = new Produto('Camiseta', 50);

const p2 = {
  nome: 'Caneca',
  preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)
// p1.desconto(100);
p1.aumento(100);
p2.aumento(10);
// console.log(p2);

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99
  },
  tamanho: {
  writable: true,
    configurable: true,
    enumerable: true,
    value: 42},
});// criou o obj e setou o prototype.

// p3.preco = 113; //sem chave daria erro, neste caso foi necessário criar a chave.
p3.aumento(10);
console.log(p3);