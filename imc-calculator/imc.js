function calcularIMC() {
  // captação de  campos
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);

  let formulaImc = peso / (altura * altura);

  let resultado = (document.getElementById(
    "resultado"
  ).textContent = `${formulaImc.toFixed(2)}`);

  let classIMC = document.getElementById("classIMC");

  //verifica se o número é valido
  if (peso === 0 || altura === 0) {
    window.alert("Digite um valor válido!");

    // testa condições
  } else if (formulaImc < 18.5) {
    classIMC.textContent = "Abaixo do Peso ⚠️";
  } else if (formulaImc >= 18.5 && formulaImc < 25) {
    classIMC.textContent = "Peso Normal 🟢";
  } else if (formulaImc >= 25 && formulaImc < 30) {
    classIMC.textContent = "Sobrepeso 🟠";
  } else if (formulaImc >= 30 && formulaImc < 35) {
    classIMC.textContent = "Obesidade I 🔴";
  } else if (formulaImc >= 35 && formulaImc < 40) {
    classIMC.textContent = "Obesidade II 🔴❗";
  } else {
    classIMC.textContent = "Obesidade III 🚨";
  }
  // remove o botão calcular após o resultado
  document.getElementById("btn").removeEventListener("click", calcularIMC);

  // capta a função limparCampos
  document.getElementById("btn").addEventListener("click", limparCampos);

  // muda o nome do botão calcular para limpar
  btn.textContent = "Limpar";
}

function limparCampos() {
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("classIMC").textContent = "";

  let btn = document.getElementById("btn");

  btn.textContent = "Calcular";

  document.getElementById("btn").removeEventListener("click", limparCampos);

  document.getElementById("btn").addEventListener("click", calcularIMC);
}

document.getElementById("btn").addEventListener("click", calcularIMC);
