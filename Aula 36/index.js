// For in - Estrutura de repetição
// For in -> lê os índices ou chaves do objeto


//indice            0        1      2
//const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let indice in frutas) {
//    console.log(frutas[indice]); 
// }

const pessoa = {
    nome: 'Jeferson',
    sobrenome: 'Santos',
    idade: 28
};

for (let chave in pessoa) {
    console.log(chave+":", pessoa[chave]);
}