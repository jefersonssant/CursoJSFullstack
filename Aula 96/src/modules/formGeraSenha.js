import geraSenha from "./geradores";
const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiuculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector(.gerar-senha);

export default () => {
  geraSenha.addEventListener('click', () => {
    senhaGerada.innerHTML = gera()
  })
}

function gera() {
  const senha = geraSenha(qtdCaracteres.value,
  chkMaiuculas.checked,
  chkMinusculas.checked,
  chkNumeros.checked,
  chkSimbolos.ch
  );
  return senha || 'Nada selecionado';
}