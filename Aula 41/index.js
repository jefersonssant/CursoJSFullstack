// Exercício de Lógica de Programação 01 - escreva uma função que recebe 2 número e retorne o maior deles

// function max (x, y) {
//     return x > y ? x : y
// }

const max2 = (x, y) => x > y ? x : y;
// quando só tem uma linha de bloco de código pode eliminar as chaves e remover a palavra return

console.log(max2(10, 20));

// Escreva uma função chamada ePaisagem
// que recebe dois argumentos, largura e altura
// de uma imagem (number)
// Retorne true se a imagem estiver no modo paisagem

// function ePaisagem (largura, paisagem) {
//     return largura > paisagem; /*? true : false; neste caso pode-se omitir true e false*/
// }
// com arrow function:

const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1920, 1920));