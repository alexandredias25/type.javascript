document.addEventListener("DOMContentLoaded", () => {
    const calcularButton = document.getElementById("calcularButton") as HTMLInputElement;
    calcularButton.addEventListener("click", calcularCalorias);
});

function calcularCalorias() {
    const metaInput = document.getElementById("meta") as HTMLInputElement;
    const pesoInput = document.getElementById("peso") as HTMLInputElement;
    const resultadoDiv = document.getElementById("res");

    const meta = metaInput.value.toLowerCase();
    const peso = parseFloat(pesoInput.value);

    const manter = 30;
    const crescer = 50;

    let resultado: string;

    if (meta === "manter") {
        resultado = `Resultado: ${peso * manter} calorias por dia.`;
    } else if (meta === "crescer") {
        resultado = `Resultado: ${peso * crescer} calorias por dia.`;
    } else {
        resultado = "Meta inválida. Use 'manter' ou 'crescer'.";
    }

}
