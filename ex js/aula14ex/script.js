function carregar() {
    let msg = window.document.getElementById("msg")
    let foto = window.document.getElementById("imagem")
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `agora são ${hora}:${minutos} hora`
    if (hora >= 0 && hora < 12) {
        //bom dia
        foto.src="manha.png"
        document.body.style.background = "#FFDEAD"
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde 
        foto.src = "tarde.png"
       document.body.style.background = "#D2691E"
    } else {
        //boa noite
        foto.src = "noite.png"
        document.body.style.background = "#191970"
    }



}

