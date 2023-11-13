// Captura elementos HTML
var num1Input = document.getElementById("num1");
var num2Input = document.getElementById("num2");
var calculateButton = document.getElementById("calculate");
var resultSpan = document.getElementById("result");
// Função para calcular a soma
function calcularSoma() {
    var num1 = parseFloat(num1Input.value);
    var num2 = parseFloat(num2Input.value);
    if (!isNaN(num1) && !isNaN(num2)) {
        var soma = num1 + num2;
        resultSpan.textContent = soma.toString();
    }
    else {
        resultSpan.textContent = "Entradas inválidas";
    }
}
// Adiciona um ouvinte de eventos para o botão de cálculo
calculateButton.addEventListener("click", calcularSoma);
