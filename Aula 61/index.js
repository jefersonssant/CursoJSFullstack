//Arrays avançado

//                0           1          2
// const nomes = ['Eduardo', 'Jeferson', 'Rafael']; // chama-se array literal
// // outra opção de criação com o construtor: const nomes = new Array('Eduardo', 'Jeferson', 'Rafael');
// //Serve para String, Objetos, Funções, Números
// nomes[2] = 'Gustavo';
// delete nomes[2];
// console.log(nomes);

//Valor por referência
// const nomes = ['Eduardo', 'Jeferson', 'Rafael'];
// const novo = nomes;

// novo.pop();//vai refletir diretamente no array
// console.log(nomes);

// const nomes = ['Eduardo', 'Jeferson', 'Rafael'];
// const novo = [...nomes]; //spread, 

// novo.pop();//não vai refletir diretamente no array
// console.log(nomes);
// console.log(novo);

// const nomes = ['Eduardo', 'Jeferson', 'Rafael'];
// const removido = nomes.pop();//remove o útimo, nomes.shift() remove o primeiro e altera o índice
// console.log(nomes, removido);

// const nomes = ['Eduardo', 'Jeferson', 'Rafael'];
// nomes.push('João');//adiciona na última posição, para adicionar ao início utiliza-se nomes.unshift('João'), isso altera o índice.
// console.log(nomes);


//para fatiar o elemento:
//                0           1          2 
// const nomes = ['Eduardo', 'Jeferson', 'Rafael', 'Wallace', 'João'];
// const novo = nomes.slice(0, -1); //O último índice nunca é incluído, então deve-se avançar mais um para incluir o que quer, neste caso vai de 0 a 2.
// console.log(novo);

//converter string num array:

// const nome = 'Jeferson Silva dos Santos';
// const nomes = nome.split(' ');
// console.log(nomes);

//Fazer um arry se tornar uma string:
const nomes = [ 'Jeferson', 'Silva', 'dos', 'Santos' ];
const nome = nomes.join(' '); //vai unir todos numa string
console.log(nome);