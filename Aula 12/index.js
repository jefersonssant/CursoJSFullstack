let varA = 'A'; //valor de A aponte para B
let varB = 'B'; //valor de B aponte para C
let varC = 'C'; //valor de C aponte para valor de A

let troca1 = varA;
let troca2 = varB;
let troca3 = varC;

console.log(troca2, troca3, troca1);

/* Solução do professor:

Se colocasse com as mesmas variáveis, as primeiras variáveis perderiam o valor. Poderia salvar o valor de apenas uma várial numa nova.

const varATemp = varA;
varA = varB
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

Outra maneira:

[varA, varB, varC] = [1, 2, 3]
[varA, varB, varC] = [varB, varC, varA]

*/