// Object.defineProperty() Object.defineProperties() -> funções relacionadas com as chaves do objeto, uma para várias chaves e outra para uma chave só.

function Produto(nome, preco, estoque) {
    /*this.nome = nome;
    this.preco = preco;*/

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        }
    });
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true, /*mostra a chave*/
        value: estoque, /*captura valor */
        writable: true, /*Isso não vai permitir alteração do valor, controla se o valor pode ou não ser alterado */
        configurable: false /*Configurar a chave, alterar, apagar, etc */
    });/* Ele foi criado, mas não exibido sem as configurações internas */

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     value: estoque,
    //     writable: true,
    //     configurable: false
    // });
       
}

const p1 = new Produto('Camiseta', 20, 3);
delete p1.estoque;
p1.estoque = 500000;
console.log(p1);
// console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}