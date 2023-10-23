/*
Dados Primitivos(valores imutáveis): string, number, boolean, undefined, null (bingint, symbol) - Valores copiados

Referência (mutável): array, object, function - Passados por referência - aponta para o mesmo valor na memória
*/

/*
Array
let a = 'A';
let b = a; //Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);*/

/*let a = [1, 2, 3];
let b = a; //neste caso aponta para o mesmo valor na memória, se alterar o valor da variável afeta na outra.
console.log(a, b)

a.push(4);//afeta b
console.log(a, b);

b.pop();//afeta a
console.log(a, b);*/

//Para copiar o valor de a e tornar a variável nova totalmente independente, faz um spread: let b = [...a]

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};
a.nome = 'João';

console.log(a);
console.log(b);