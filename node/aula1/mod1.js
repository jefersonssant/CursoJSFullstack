// O node tem um modo diferente de exportar comparado ao ES6

const nome = 'Jeferson'
const sobrenome = 'Santos'

const falaNome = () => nome + ' ' + sobrenome

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// modo abreviado:

exports.nome = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar'

// nesse contexto a palavra this se refere tanto a module.exports e exports

// outro modo:

module.exports = {
  nome, sobrenome, falaNome
} // exportar dessa forma não pode ser feito apenas com exports. Ex.: exports {}

// console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

exports.Pessoa = Pessoa