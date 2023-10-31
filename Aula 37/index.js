// For of - Estrutura de repetição

//            0123...
const nomes = ['Jeferson', 'Rafael', 'Gustavo'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
} // For clássico - geralmente com iteráveis (arrays ou strings)

console.log('####');

for (let i in nomes) {
    console.log(nomes[i]);
}// For in -  Retorna o índice ou chave (string, array ou objetos)

console.log('####');

for (let valor of nomes) {
    console.log(valor);
}// For of - Retorna o valor em si (iteráveis, arrays ou strings)

console.log('####');

nomes.forEach(function(valor, indice) {
    console.log(valor, indice);
});