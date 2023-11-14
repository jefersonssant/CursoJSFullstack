//clousures - habilidade da função em acessar o seu escopo lexico.

function retornaFuncao() {
    const nome = 'Jef';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao);