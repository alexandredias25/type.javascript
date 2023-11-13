function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById("txtano")
    let res = document.querySelector("div#res")
    if (fano.value.length == 0 ||  fano.value > ano) {
        window.alert("[erro] verifique os dados e tente novamente")

    } else {
        let fsex = document.getElementsByName("radSex")
        let idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada ${idade}`
    }
}
