const aaaa = require('./mod')

const cachorrinho =  new aaaa('Dog')
cachorrinho.latir()

// variáveis internas, dentro do módulo:

console.log(__filename); // arquivo atual
console.log(__dirname); // pasta atual

// Para manipular caminho existe uma função chamada Path:

const path = require('path')
console.log(path.resolve(__dirname, '..', '..'));

// navegação. Para frente: ./ ". é a pasta atual"
// navegação. Para trás: ../