//Objetos

/*const  nome01 = 'Luiz';
const sobrenome01 = 'Miranda';
const idade01 = 25;
const nome02 = 'Maria';
const sobrenome02 = 'Oliveira';
const idade = 55;*/

/*const pessoa1 = {
    nome: 'Luiz',
    sobremone: 'Miranda',
    idade: 25
};*/

/*function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };//podemos deixar de repetir nome, sobrenome e idade
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Santos', 20);
const pessoa5 = criaPessoa('Jean', 'Otávio', 69);
console.log(pessoa1.nome, pessoa2.nome);*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
}; //Funções dentro de objetos são chamadas de método.

pessoa1.fala();