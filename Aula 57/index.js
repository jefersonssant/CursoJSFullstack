// Funções Construtoras: criam novos objetos, na função fábrica a gente faz ela retornar um objeto voluntarimente. Na função construtora, ela já faz muita coisa automaticamente para você, cria um objeto e retorna um objeto.

// Na função contrutora a gente sempre tem de criar o nome da função com a primeira letra maiúscula, e no bloco da função coloca-se ";" e não ",".  -> Pessoa (new) é obrigatório usar esse último termo.

function Pessoa(nome, sobrenome) {
    /*const ID -> ex.: criar atributos privados, uma variável só dentro da função, e esse variável só vai viver dentro da função*/
    //o corpo da função já vai ser o objeto, o this já se refere ao nome da função.
    const ID = 123456;
    const metodoInterno = () => {

    };

    // Atributos ou métodos públicos, pois pode ser acessado de fora com a notação de ponto ".".
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome +': Sou um método');
    }
}

const p1 = new Pessoa('Jeferson', 'Santos');
const p2 = new Pessoa('Rafael', 'Macedo');

p2.metodo();