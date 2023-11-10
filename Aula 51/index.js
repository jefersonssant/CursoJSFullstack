//Escopo lexico, a função conhece o local onde foi declarada, tudo o que foi declarado dentro dela e nos vizinhos (bolha) dela

const nome = 'Jeferson';

function falaNome() {
    //const nome = 'Santos';
    console.log(nome);
}

//falaNome();

function usaFalaNome(){
    const nome = 'Santos';
    falaNome();
}

usaFalaNome();