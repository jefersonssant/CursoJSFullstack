//Atribuição via desestruturação - Objects

const pessoa = {
    nome: 'Caio',
    sobrenome: 'Lima',
    idade: 28,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//console.log(pessoa.nome);//para pegar dados isolados tem-se que utilizar a notação de ponto (.)

// const nome = pessoa.nome;//para jogar dentro da variável a mesma coisa (.)
// console.log(nome);

//Atribuição via desestruturação:
// const { nome, sobrenome, endereco } = pessoa;
// console.log(endereco);

// const {
//     endereco: { rua: r, numero }
// } = pessoa;
// console.log(r, numero);

const { nome, ...resto } = pessoa;
console.log(nome, resto);

