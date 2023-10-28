// For - clássico - Estrutura de Repetição

// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// i usado aqui com siginificado de index, razão porque é muito utilizado

// for (let i = 0; i <= 10; i++) {
//     const par = i % 2 == 0 ? 'par' : 'impar';
//     console.log(i, par);
// }

// Percorrendo um array:
//                0        1      2
const frutas = ['Maça', 'Pêra', 'Uva']
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
}