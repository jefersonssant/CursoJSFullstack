//Funções Recursivas, aquela que se chama de volta, cuidado porque o navegador pode interromper pelo excesso.

function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);