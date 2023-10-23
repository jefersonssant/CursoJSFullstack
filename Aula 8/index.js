/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.586498756195
Luiz Otávio nasceu em 1980
*/

const nome = 'Jeferson Silva';
const sobrenome = 'Santos';
const idade = 28;
const peso = 61;
const alturaEmM = 1.72;
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento;

anoNascimento = 2023 - idade;

// + para unir valores "concatenar" ou usar `string ${variável} etc...` "tamplate string o símblo ${} se chama placeholder"

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg, tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);