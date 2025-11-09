
const loginContainer = document.getElementById("login-container");
const cadastroContainer = document.getElementById("cadastro-container");

function entrar(event) {
  event.preventDefault();
  alert("Login efetuado com sucesso!");
}

function mostrarCadastro() {
  loginContainer.style.display = "none";
  cadastroContainer.style.display = "block";
}

function cadastrar(event) {
  event.preventDefault();
  alert("Usuário cadastrado com sucesso!");
  limparCadastro();
  voltarLogin();
}

document.addEventListener("DOMContentLoaded", function() {
  const nomeInput = document.getElementById("nome");
  if (nomeInput) {
    nomeInput.addEventListener("keypress", function(event) {
      if (!isNaN(event.key) && event.key !== " ") {
        event.preventDefault();
        alert("❌ Este campo aceita apenas letras!");
      }
    });
  }
});
