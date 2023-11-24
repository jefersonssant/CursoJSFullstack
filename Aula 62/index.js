//Método splice

//               -5      -4        -3         -2        -1
//                0       1         2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1 para adicionar, elem2 para adicionar, elem3 para adicionar);
//.pop()

// const removidos = nomes.splice(4, 1); // retorna como array o elemento removido, pois pode-se remover mais de um elemento.

//const removidos = nomes.splice(3, 2); // retorna como array o elemento removido, pois pode-se remover mais de um elemento.
//nomes.splice(-2, Number.MAX_VALUE) a partir do valor do índice 2 vai remover até o maior ídice.
//nomes.splice(-2, 1) vai remover só o Gabriel.
//nomes.splice(-2, 0) não remove nenhum valor.

const removidos = nomes.splice(3, 1, 'Luiz'); //Vai adicionar o novo valor no índice 3 e Gabriel vai ser empurrado para o índice 4. Se acrescentar 1 no lugar do 0 após o 3, vai remover Gabriel e adicinar Luiz.

console.log(nomes, removidos);

//Simula o pop() => const removidos = nomes.splice(-1, 1);

//Simula o shift() => const removidos = nomes.splice(0, 1);

//Simula push() => nomes.splice(nomes.lenght, 0, 'Luiz);

//Simula unshift() => nomes.splice(0, 0, 'Luiz', 'Otávio');