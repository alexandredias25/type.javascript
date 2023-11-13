let amigo = { nome: "alex",
sexo: "M",
peso: 63.7,
engordar(p=0){
    console.log("engordou")
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`