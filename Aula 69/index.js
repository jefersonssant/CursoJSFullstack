// Revisão de Objetos
// literal de uma string '', "", ``
// literal de array []
// número literal é o número jogado direto na variável 123...

const pessoa = {
   /*chave*/ nome: 'Luiz', /*valor*/
   sobrenome: 'Otávio'
};

console.log(pessoa.nome); //Pode-se utilizar a notação de [] -> pessoa[nome]
console.log(pessoa.sobrenome);

//Para acessar a chave dinamicamente não se consegue com a notação de ponto, deve-se utilizar []. Ex.: Quando o valor é passado para a chave pelo usuário.

const chave = 'nome';
console.log(pessoa[chave]);

// Além do literal pode-se utilizar o construtor do objeto, ex.: para array: new array()

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 28;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

delete pessoa1.nome; // vai manter somente a chave sobrenome
console.log(pessoa1);

// Objetos podem conter métodos que são funções que executam ações. A vantagem disso é ter acesso às coisas do objeto dentro da função.

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}

//################################################

// Criando moldes: Factory functions / Construtor functios / Classes são padrões de projeto para escolher

function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }/*Por causa do get, vai simular como se fosse um atributo da classe e não como método*/
    }
}// Factory function

const p1 = criaPessoa('Jeferson', 'Santos')
console.log(p1.nomeCompleto);
// Ou poderia ser acessado assim, se não existisse o get: console.log(p1.nomeCompleto());

// Na constructor function o javascript muda o comportamento da função baseado na palavra new:

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    /*Object.freeze(this) isso não vai permitir alterar e nem criar coisas dentro do objeto*/
}
//Observa que não está retornando nada na função

// A palavra new vai criar um objeto vazio {} <- vai pegar a palavra this, vai atrelar a palavra this dentro do objeto, this sempre vai fazer referência a quem tá criando, p2, p3...

// p2 = (ENDEREÇOMEMORIA) -> 'Valor', então mesmo com const é possível alterar o valor o que é inalterável é o (ENDEREÇOMEMORIA).
const p2 = new Pessoa('Jef', 'Santos');
Object.freeze(p2); //Torna o valor inalterável, ex.: Caio não pode substituir Jef.
p2.nome = 'Caio';
console.log(p2);

