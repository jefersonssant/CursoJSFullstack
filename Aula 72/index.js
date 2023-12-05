// Métodos úteis para objetos

/*
Object.value
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

const produto = {
    nome: 'Produto',
    preco: 1.8
}

// const outraCoisa = produto;
// const caneca = {
//     ...produto,
//     material: 'porcelana'
// } //com o spread para de apontar para o mesmo local

produto.nome = 'Jef Von Sant' //outraCoisa.nome = '' daria na mesma, ambas apontam para o mesmo local da memória
// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;

// console.log(produto);
// console.log(outraCoisa);

//############# Object.assign(des, any)

const caneca = Object.assign({}, produto, {material: 'porcelana'}); //copiar o objeto, o spread é mais intuitivo

// pior forma de copiar: const caneca = {nome: produto.nome, preco: produto.preco}

// console.log(caneca);

//############# Object.getOwnPropertyDescriptor -> descrever as propriedades do objeto

Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false
});

produto.nome = 'Jeferson';
delete produto.nome;

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

//##################### Object.values 

console.log(Object.values(produto)); //retorna só valores
console.log(Object.entries(produto)); // retorna chave e valor, permite a iteração:

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
