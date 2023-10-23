//alert('Com a nossa mensagem.')
//anotações no caderno.
//Fazer exercício: retornar valor para variável, transformar para número e fazer uma operação.

let numero1 = Number(window.prompt("Digite um número?"));
let numero2 = Number(window.prompt("Digite outro número"));

//console.log(numero1 * numero2);
const res = numero1 + numero2;
window.alert("O resultado da soma é: " + res);

//Ou poderia ser: window.alert(`O resultado da soma é: ${res}`);

/*Resolução do execício pelo professor

let num1 = prompt('Digite um número:')
let num2 = prompt('Digite outro número:')

num1 = Number(num1);
num2 = Number(num2);

console.log(num1 + num2);

const resultado = num1 + num2;

alert('O resultado da sua conta foi: ' + resultado);

Poderia ter feito sem a variável resultado se não fosse reutilizar o cálculo, exemplo:

alert(`O resultado da sua conta foi: ${num1 + num2}`);


*/