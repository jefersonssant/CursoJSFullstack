const inputNovaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    li.style.listStyle = 'none';
    li.style.marginLeft = '-45px';
    return li; 
}

inputNovaTarefa.addEventListener('keypress', function(e){
    if (e.keyCode === 13) {
        if (!inputNovaTarefa.value) return;
        criaTarefa(inputNovaTarefa.value);  
    }
});

function limpaInput(){
    inputNovaTarefa.value = '';
    inputNovaTarefa.focus();
}

function criaBotaoApagar(li){
    li.innerHTML += '  ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

function criaCheckBox(){
    checkBox = document.createElement('input');
    checkBox.setAttribute('class', 'checkBoX');
    checkBox.type = 'checkbox';
    checkBox.name = 'setBox';
    checkBox.id = 'setBox';
    checkBox.checked = false;
    checkBox.value = 'done';
    return checkBox;
}

function criaTarefa(textInput){
    const li = criaLi();
    const checkBox = criaCheckBox();
    li.appendChild(checkBox);
    li.innerHTML += textInput;
    li.style.color = 'black';
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnAddTarefa.addEventListener('click', function(){
    if (!inputNovaTarefa.value) return;
    criaTarefa(inputNovaTarefa.value);
});

document.addEventListener('click', function(e){
    const element = e.target;
    const checkBoX = criaCheckBox();
    if (element.classList.contains('apagar')){
        element.parentElement.remove();
        salvarTarefas();
    }

    if (element.classList.contains('checkBoX') && element.parentElement.style.color == 'black'){
        element.parentElement.style.color = 'red';
    } else {
        element.parentElement.style.color = 'black';
    }
    
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas){
       criaTarefa(tarefa); 
    }
}

adicionaTarefasSalvas();
