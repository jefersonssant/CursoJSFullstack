// Filter - Filtrando array -> Sempre retorna um array com a mesma quantidade de elementos ou menos.

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// function callbackFilter(valor) {
//     return valor > 10;
// };

// const numerosFiltrados = numeros.filter(valor => valor > 10); //vai receber função de callback

// const numerosFiltrados = numeros.filter((valor, indice, array) => {
//     console.log(valor, indice, array);
//     return valor > 10
// });

const numerosFiltrados = numeros.filter(valor => valor > 50);

console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5); //sempre vai retornar um novo array, não altera o original

console.log(pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDeCinquentaAnos);

const nomeTerminaComA = pessoas.filter((obj) => {
    return obj.nome.toLowerCase().endsWith('a');
})

console.log(nomeTerminaComA);