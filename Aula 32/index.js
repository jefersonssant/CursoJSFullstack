//Atribuição via desestruturação

/*let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A*/

//const numeros = [b, c, a];
//[a, b, c]/*atribuição via deses..*/ = numeros;

//console.log(a, b, c);

//               0  1  2  3  4  5  6  7  8
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);
// const [um, , três, ,cinco, ,sete] = numeros;
// console.log(um, três, cinco);


// ... quando é para pegar o resto chama-se rest operator, quando é para distribuir, espalhar chama-se spread operator.

// índices            0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]

//console.log(numeros[1][2]);
// const [,[,,seis]] = numeros; //cria a variável e pega o elemento do array
// console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista3);

