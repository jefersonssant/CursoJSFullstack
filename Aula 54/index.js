//Funções imediatas ou autoexecutáveis - IIFE -Immediately invoked function expression

// function qualquerCoisa() {
//     console.log(12234564);
// }

qualquerCoisa();//Neste caso ela toca o escopo global

(function(idade, peso, altura) {
    //const nome = 'Jef';
    const sobrenome = 'Santos';

    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Jeferson'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(28, 62, 1.72);//Neste caso existe proteção contra o escopo global

const nome = 'Qualquer coisa';

