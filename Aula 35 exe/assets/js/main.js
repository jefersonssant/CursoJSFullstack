/*const elementos = [
    {tag: 'p', texto: 'Frase 1'},// 0
    {tag: 'div', texto: 'Frase 2'},// 1
    {tag: 'footer', texto: 'Frase 3'},// 2
    {tag: 'section', texto: 'Frase 4'},// 3
];

container = document.querySelector('.container');
divbox = document.createElement('div');
container.appendChild(divbox)


function criaTag() {
    for(let i = 0; i < elementos.length; i++) {
        document.createElement(elementos[i]);
        divbox.appendChild(elementos[i]);
    }
}

divbox.appendChild(criaTag())*/

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
