const botaoEntrar = document.getElementById('entrar');
const aceitar = document.getElementById('agreement');
const counter = document.getElementById('counter');
const comentario = document.getElementById('textarea');
const btnEnviar = document.getElementById('submit-btn');
const primeiroNome = document.getElementById('input-name');
const segundoNome = document.getElementById('input-lastname');
const nomeSobrenome = document.getElementById('nomeSobrenome');
const emailInput = document.getElementById('input-email');
const emailInformado = document.getElementById('email-irformado');
const casaInformada = document.getElementById('casa-informada');
const casa = document.getElementById('house');
const familiaEscolhida = document.getElementById('familia-escolhida');
const familiaRadio = document.getElementById('radio-family');
const materiaEscolhida = document.getElementById('materias-selecionadas');
const materias = document.getElementById('conteudos');
const notaDada = document.getElementById('nota-informada');
const nota = document.getElementById('avaliacao');
const obsEscrita = document.getElementById('obs-escrita');

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

function agreement() {
  const botão = document.getElementById('submit-btn');
  if (aceitar.checked) {
    botão.disabled = false;
  } else {
    botão.disabled = true;
  }
}
aceitar.addEventListener('click', agreement);

function contador() {
  counter.innerText = 500 - comentario.value.length;
}
comentario.addEventListener('keyup', contador);

function radioSelecionado() {
  const radios = familiaRadio.children;
  for (let index = 0; index < radios.length; index += 1) {
    if (radios[index].checked) {
      return radios[index].value;
    }
  }
}

function materiasSelecionadas() {
  const checkboxes = materias.children;
  const checadas = [];
  for (let index = 0; index < checkboxes.length; index += 1) {
    if (checkboxes[index].checked) {
      checadas.push(` ${checkboxes[index].value}`);
    }
  }
  return `Matérias:${checadas}`;
}

function notaSelecionada() {
  const notas = nota.children;
  for (let index = 0; index < notas.length; index += 1) {
    if (notas[index].checked) {
      return notas[index].value;
    }
  }
}

function enviar(event) {
  event.preventDefault();
  nomeSobrenome.innerText = `Nome: ${primeiroNome.value} ${segundoNome.value}`;
  emailInformado.innerText = `Email: ${emailInput.value}`;
  casaInformada.innerText = `Casa: ${casa.value}`;
  familiaEscolhida.innerText = `Família: ${radioSelecionado()}`;
  materiaEscolhida.innerText = materiasSelecionadas();
  notaDada.innerText = `Avaliação: ${notaSelecionada()}`;
  obsEscrita.innerText = `Observações: ${comentario.value}`;
  const formulario = document.getElementById('evaluation-form');
  formulario.style.display = 'none';
}
btnEnviar.addEventListener('click', enviar);
