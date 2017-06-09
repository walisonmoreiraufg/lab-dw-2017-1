//alert("Carregando script num arquivo externo.");

function calcular() {
  var idade = document.formulario.idade.value;
  if (idade >= 18) {
    alert("De maior! :)");
  } else {
    alert("De menor! :)");
  }
}