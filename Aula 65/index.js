// Map - Mapeando array - vai receber função de callback como no filter, com valor, indice e array.

// Map sempre vai ter o tamanho do array original

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

// ############################################

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomes = pessoas.map(obj => obj.nome);
// console.log(nomes);

// const idades = pessoas.map(function(obj){
//     delete obj.nome;
//     return obj;
// }) // Primeira maneira

const idades = pessoas.map(function(obj){
    return {idade: obj.idade};
}) // Segunda maneira, retornando um objeto novo, para transformar em arrow function tem de colocar o novo objeto entre parênteses

// const idades = pessoas.map(obj => ({idade: obj.idade}))

// console.log(idades);

const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1) * 1000;
    return newObj;
});

// console.log(pessoas);
console.log(comIds);