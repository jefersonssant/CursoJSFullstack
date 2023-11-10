//Retorno de função
// Return retorna um valor
// Faz terminar a função

// function soma(x, y) {
//     return x + y;
// }

// function soma2(a, b) {
//     console.log(a + b);
//     //não retorna nada, mas pode fazer alguma coisa útil
// }

// soma2(5, 2);

// document.addEventListener('click', function(){
//     document.body.style.background = 'red';
// })

// function criaPessoa(nome, sobrenome){
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Jef', 'Santos');
// const p2 = {
//     nome: 'Jef',
//     sobrenome: 'Santos'
// };

// console.log(typeof p1);
// console.log(typeof p2);

// function falaFrase(comeco){
//     function falaResto(resto){
//         return comeco + '' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá,');
// const resto = fala('mundo!');
// console.log(resto);

function criaMultiplicador(multiplicador){
    return function(n) {
       return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4));