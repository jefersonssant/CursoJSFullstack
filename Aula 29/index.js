//switch

const data = new Date('1995-05-20 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexo = getDiaSemanaTexto(diaSemana);

/*if (diaSemana === 0) {
    diaSemanaTexo = 'Domingo';
} else if (diaSemana === 1) {
    diaSemanaTexo = 'Segunda';
} else if (diaSemana === 2) {
    diaSemanaTexo = 'Terça'; 
} else if (diaSemana === 3) {
    diaSemanaTexo = 'Quarta';
} else if (diaSemana === 4) {
    diaSemanaTexo = 'Quinta';
} else if (diaSemana === 5) {
    diaSemanaTexo = 'Sexta';
} else if (diaSemana === 6) {
    diaSemanaTexo = 'Sábado';
} else {
    diaSemanaTexo = '';
}
console.log(diaSemana, diaSemanaTexo);*/

/*switch (diaSemana) {
    case 0:
        diaSemanaTexo = 'Domingo';
        break;//necessário para parar a execução do código. Se colocar dentro de uma função pode eliminar o break.
    case 1:
        diaSemanaTexo = 'Segunda';
        break;
    case 2:
        diaSemanaTexo = 'Terça';
        break;
    case 3:
        diaSemanaTexo = 'Quarta';
        break;
    case 4:
        diaSemanaTexo = 'Quinta';
        break;
    case 5:
        diaSemanaTexo = 'Sexta';
        break;
    case 6:
        diaSemanaTexo = 'Sábado';
        break;
    default:
        diaSemanaTexo = '';
}

console.log(diaSemana, diaSemanaTexo);*/

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexo;
    switch (diaSemana) {
        case 0:
            diaSemanaTexo = 'Domingo';
            break;//necessário para parar a execução do código. Se colocar dentro de uma função pode eliminar o break.
        case 1:
            diaSemanaTexo = 'Segunda';
            return diaSemanaTexo;
        case 2:
            diaSemanaTexo = 'Terça';
            return diaSemanaTexo;
        case 3:
            diaSemanaTexo = 'Quarta';
            return diaSemanaTexo;
        case 4:
            diaSemanaTexo = 'Quinta';
            return diaSemanaTexo;
        case 5:
            diaSemanaTexo = 'Sexta';
            return diaSemanaTexo;
        case 6:
            diaSemanaTexo = 'Sábado';
            return diaSemanaTexo;
        default:
            return diaSemanaTexo;
}
};

console.log(diaSemana, diaSemanaTexo);