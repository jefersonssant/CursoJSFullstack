let campData = document.querySelector('h1');

let data = new Date();
let diaSemana = data.getDay();
let dia = data.getDate();
let mes = data.getMonth();
let ano = data.getFullYear();
let hora = data.getHours();
let min = data.getMinutes();
console.log(hora);
let diaTexto;
let mesTexto;

switch (diaSemana) {
    case 0:
        diaTexto = 'Domingo';
        break;
    case 1:
        diaTexto = 'Segunda-feira';
        break;
    case 2:
        diaTexto = 'Terça-feira';
        break;
    case 3:
        diaTexto = 'Quarta-feira';
        break;
    case 4:
        diaTexto = 'Quinta-feira';
        break;
    case 5:
        diaTexto = 'Sexta-feira';
        break;
    case 6:
        diaTexto = 'Sábado';
        break;
    default:
        diaTexto = '';

}

switch (mes) {
    case 0:
        mesTexto = 'Janeiro';
        break;
    case 1:
        mesTexto = 'Fevereiro';
        break;
    case 2:
        mesTexto = 'Março';
        break;
    case 3:
        mesTexto = 'Abril';
        break;
    case 4:
        mesTexto = 'Maio';
        break;
    case 5:
        mesTexto = 'Junho';
        break;
    case 6:
        mesTexto = 'Julho';
        break;
    case 7:
        mesTexto = 'Agosto';
        break;
    case 8:
        mesTexto = 'Setembro';
        break;
    case 9:
        mesTexto = 'Outubro';
        break;
    case 10:
        mesTexto = 'Novembro';
        break;
    case 11:
        mesTexto = 'Dezembro';
        break;
    default:
        mesTexto = '';
}

campData.innerHTML = `${diaTexto}, ${dia} de ${mesTexto} de ${ano} Às ${hora}:${min}`;