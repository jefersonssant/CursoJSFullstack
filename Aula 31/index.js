//Mais diferenças entre var e let/const
// let tem escopo de bloco {... bloco}
// var só tem escopo de função

const verdadeira = true;

/*let nome = 'Luiz';//criando
var nome2 = 'Luiz';//criando

//var nome2 = 'Luiz'; //variável redeclarada

if (verdadeira) {
    let nome = 'Otávio';//criando e não redeclarando
    var nome2 = 'Rogério';//redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo';//redeclarando
        let nome = 'Outra coisa'
    }
}

console.log(nome, nome2);*/

//var sobrenome = 'Miranda';

function falaOi() {
    //var sobrenome = 'Luiz';//A variável criada dentro da função não será acessada por código externo
    //console.log(sobrenome);//Podemos utilizar variável fora da função

    if (verdadeira) {
        let nome = 'Luiz';
        var sobrenome = 'Miranda';
        console.log(sobrenome);
    }
}

falaOi();