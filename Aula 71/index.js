// Getters e Setters -> seria como uma maneira de proteger a propriedade

// getter -> obter o valor setter -> setar, configurar

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, /*mostra a chave*/
        //value: estoque, /*captura valor */
        //writable: true, /*Isso não vai permitir alteração do valor, controla se o valor pode ou não ser alterado */
        configurable: false, /*Configurar a chave, alterar, apagar, etc */
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                console.log('Error');
                return;
            }
            estoque = valor;
        }
    });/* Ele foi criado, mas não exibido sem as configurações internas */
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },

        set nome(valor) {
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20, 3);
// /*setter :*/ p1.estoque = 'eu';
// // console.log(p1);
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.'
console.log(p2);
console.log(p2.nome);