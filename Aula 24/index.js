/* if, else if e else - Estrutura Condicional

Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite

if pode ser usado sozinho
else if não pode ser executado sozinho, sempre que utilizo a palavra else, preciso de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utlizando apenas if e else
*/

const hora = 50;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Olá');
}