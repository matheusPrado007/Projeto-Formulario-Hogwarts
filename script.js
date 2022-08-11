const botaoEntrar = document.getElementById('entrar');

botaoEntrar.addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.getElementById('email');
  const senha = document.getElementById('password');
  if (!email.value.includes('@') || senha.value == '') {
    alert("Email ou senha inválidos.");
  } else {
    alert("Olá, Tryber!");
  }
});