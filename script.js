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
