//Objeto Date
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

/*const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(0 + tresHoras); // (0) 01/01/1970 Timestamp unix ou época unix
console.log(data.toString());*/

//const data = new Date(2019/*ano*/, 3/*mês Abril, o mês começa sempre do 0*/, 20/*dia*/, 15/*hora*/, 14/*minutos*/, 27/*segundos*/);
//console.log(data.toString());

//const data = new Date(/*'2019-04-20 20:20:59.100'*/1697985066780);
/*console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); //Mês começa do 0
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); //Conta-se os ms desde o marco zero até hoje, jogando o resultado dentro do console.log obten-se a data atual.*/

function zeroAEsquerda(num) {
    return num >= 10 ? num :  `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
