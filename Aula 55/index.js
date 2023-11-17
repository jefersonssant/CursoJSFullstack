//Factory Functions - são funções que retornam objetos

//Introdução aos poucos da palavra this

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 

        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}`;
            /*this.nome é a mesma coisa que p1.nome, o this sempre vai ser quem chamar o objeto*/
        },

        altura: a,

        peso: p,

        get imc(){ /*ao adicionar o get antes da função ele vai se comportar como um atributo como os demais. Chama-se GETTER.*/
          const indice = this.peso / (this.altura **2);
          return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Jeferson', 'Santos', 1.72, 62);
p1.nomeCompleto = 'Gustavo Carvalho dos Santos';
console.log(p1.nome);
console.log(p1.sobrenome);
const p2 = criaPessoa('Rafael', 'Macedo', 1.80, 73);
console.log(p2.imc);

// console.log(p1.fala('estudando JS'));
// console.log(p1.nome);