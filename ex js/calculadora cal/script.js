function somar() {
    let manter =30;
    let crescer = 50;
    let crescerRadio = document.querySelector("#crescer") 
    let manterRadio = document.querySelector("#manter") 
    let peso = parseFloat(document.querySelector("#peso input.peso").value);
    let resultado = document.querySelector(".res");
    if (isNaN(peso) || peso <=10) {
        window.alert("Peso inválido");}
    else if (manterRadio.checked) {
        resultado.textContent  = `Você precisa consumir ${manter * peso} calorias`
    } else if  (crescerRadio.checked) {
        resultado.textContent = `Você precisa consumir ${peso * crescer} calorias`
    
    }
}