// const mod1 = require('./mod1')
// const falaNome = mod1.falaNome
// console.log(mod1.falaNome());

// outro modo:

// const falaNome = require('./mod1').falaNome
// console.log(falaNome());

// outro modo, via desestruturação:

const {nome, sobrenome, falaNome} = require('./mod1')
console.log(falaNome());

const { Pessoa } = require('./mod1')
const p1 = new Pessoa('Jef')
console.log(p1);

// ATENÇÃO: A FORMA DO CAMINHO DENTRO DO REQUIRE É PARA NOSSOS MÓDULOS, OU SEJA, MÓDULOS DO PRÓPRIO NODE INSTALADOS PELO NPM VOCÊ NÃO PRECISA COLOCAR ./ 

const axios = require('axios')

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e))