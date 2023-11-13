let agora = new Date();
let hora = agora.getHours();
console.log(`São exatamente ${hora} horas`);
if (hora > 6 && hora < 12) {
    console.log("Bom dia");
} 
else if (hora <= 18) {
    console.log("boa tarde");
}  
else if (hora > 18 && hora <= 23) {
    console.log("boa noite");
}
else if (hora > 0 && hora <= 5) {
    console.log("boa madrugada")
}
