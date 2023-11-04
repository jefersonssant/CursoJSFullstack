// Tratando e lançando erros try, catch, throw



// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('naoExisto não existe.');
//     console.log(err);
// }

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw ('x e y precisam ser números');
    } /* para ver todos os detalhes do error pode reescrever para: throw new ReferenceError ou throw new error antes da string */

    return x + y;
}
 try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
 }catch (error) {
    //console.log(error);
    console.log('Alguma coisa amigável para o usuário.');
 }
