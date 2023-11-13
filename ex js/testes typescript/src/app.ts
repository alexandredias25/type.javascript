// Captura elementos HTML
let n1 = document.getElementById("num1") as HTMLInputElement;
let n2 = document.getElementById("num2") as HTMLInputElement;
let calculateButton = document.getElementById("calculate") as HTMLButtonElement;
let resultSpan = document.getElementById("result") as HTMLSpanElement;

// Função para calcular a soma
function calcularSoma() {
  let num1 = parseFloat(n1.value);
  let num2 = parseFloat(n2.value);
  
  if (!isNaN(num1) && !isNaN(num2)) {
    const soma = num1 + num2;
    resultSpan.textContent = soma.toString();
  } else {
    resultSpan.textContent = "Entradas inválidas";
  }
}

// Adiciona um ouvinte de eventos para o botão de cálculo
calculateButton.addEventListener("click", calcularSoma);
