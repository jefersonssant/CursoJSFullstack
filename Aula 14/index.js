// Padrão que o Javascript segue para a precisão dos número: IEEE 754-2008
let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2 etc..

//num1 = num1.toFixed(2); //Parece que resolveu, mas não, só se envolver no parseFloat ou simplesmente Number
num1 = parseFloat(num1.toFixed(2)); // resolveu
console.log(num1); //Não vai somar como a gente quer, vai retornar 0.79999
console.log(Number.isInteger(num1)); //Não é um número inteiro

/* Dá pra resolver com conta:
num1 = ((num1 * 100) + (num2 * 100)) / 100; resultado 0.8
*/

//console.log(num1.toString() + num2);
// num1 = num1.toString(); Altera o tipo da variável definitivamente
// console.log(num1.toString(2)); Representação binária
//console.log(num1.toFixed(2)); Reduz número decimal para 2 casas ex.: 10,57
//console.log(Number.isInteger(num1)); Vai verificar se o número é inteirp
//let temp = num1 * 'Olá';
//console.log(Number.isNaN(temp));