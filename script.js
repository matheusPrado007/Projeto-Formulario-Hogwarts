const botaoEntrar = document.getElementById('entrar');

function verificacao(event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (!email.value.includes('@') || senha.value === '') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}
botaoEntrar.addEventListener('click', verificacao);

const aceitar = document.getElementById('agreement');
function agreement() {
  const botão = document.getElementById('submit-btn');
  if (aceitar.checked) {
    botão.disabled = false;
  } else {
    botão.disabled = true;
  }
}
aceitar.addEventListener('click', agreement);

const counter = document.getElementById('counter');
const comentario = document.getElementById('textarea');

function contador() {
  counter.innerText = 500 - comentario.value.length;
}
comentario.addEventListener('keyup', contador);
const btnEnviar = document.getElementById('submit-btn');
const primeiroNome = document.getElementById('input-name');
const segundoNome = document.getElementById('input-lastname');
function enviar(event) {
  event.preventDefault();
  const nomeSobrenome = document.getElementById('nomeSobrenome');
  nomeSobrenome.innerText = `Nome: ${primeiroNome.value} ${segundoNome.value}`;
  const formulario = document.getElementById('evaluation-form');
  formulario.innerHTML = '';
}
btnEnviar.addEventListener('click', enviar);
