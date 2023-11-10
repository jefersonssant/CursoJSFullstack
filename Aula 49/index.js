//Parâmetros de função

//argumentos que sustenta totos os argumentos enviados

// function funcao(a, b, c){
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total, a, b, c);
// }

// funcao( 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// function funcao(a, b/*maneira nova quando o argumento não for passado: b = 2, se o argumento de b não for passado b assume valor de 2 */)/*Parâmetros: age como variáveis que recebem os argumentos definidos no chamamento da função*/{
//     b = b || 0; //b é igual a b se o argumento for enviado, será 0 quando não for enviado, maneira antiga de resolver
//     console.log(a + b);
// }

// funcao(2)/*argumentos: valores que eviamos para os parâmetros*/;

//com objeto:
// function funcao({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// // funcao({nome: 'Jef', sobrenome: 'Santos', idade: 28}); Ou:

// let obj = {nome: 'Jef', sobrenome: 'Santos', idade: 28};

// funcao(obj);

//com array:

// function funcao(valor1, valor2, valor3) {
//     console.log(valor1, valor2, valor3);
// }

// funcao('Jef', 'Santos', 28);

const conta = function(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};

conta ("+", 1, 20, 30, 40, 50)