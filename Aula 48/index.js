// Declaração de função, ocorre o function hoisting, que constiste no fato de que todas as declarações são elevadas para o topo do arquivo na hora da execução. Então não faz diferença se chamar ela antes ou depois da declaração.

function falaOi() {
    console.log('Oi');
}

falaOi();

//First-class objects (Objetos de primeira classe) a função pode ser tratada em outras linguagens de programação

//Function expression - cria uma variável que armazena a função

const souUmDado = function () {
   console.log('Sou um dado.'); 
};

souUmDado();

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

// Arrow function recurso novo, seria uma function expression mas só que mais curta

const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//setInterval(afuncao, 1000); //não poderia executar "afuncao()" mas passar a função como um dado

// Dentro de um objeto

const obj = {
    falar: function(){
        console.log('Estou falando...');
    } //pode omitir a palavra function e os dois pontos
}

obj.falar();