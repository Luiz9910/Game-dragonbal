let vida2 = 100
let vida1 = 100
var vidajiren = window.document.getElementById("vidajiren")
var vidagoku = window.document.getElementsByClassName("vidagoku")[0]
var barra_super = 0

function attack() {
    vida1 -= 9
    vida2 -= 10
    barra_super += 25
    if (vida2 <= 0) {
        window.alert("Você venceu!")
        vida2 = 100
        vida1 = 100
    } else {
        if (vida1 <= 0) {
            window.alert("Você perdeu!")
            vida2 = 100
            vida1 = 100
        }
    }
    vidajiren.innerHTML = `${vida2}`
    vidagoku.innerHTML = `${vida1}` 
}

function defesa() {
    vida1 -= 2
    if (vida2 <= 0) {
        window.alert("Você venceu!")
        vida2 = 100
        vida1 = 100
    } else {
        if (vida1 <= 0) {
            window.alert("Você perdeu!")
            vida2 = 100
            vida1 = 100
        }
    }
    vidajiren.innerHTML = `${vida2}`
    vidagoku.innerHTML = `${vida1}` 
}

function supe() {
    if (vida2 <= 0) {
        window.alert("Você venceu!")
        vida2 = 100
        vida1 = 100
    } else {
        if (vida1 <= 0) {
            window.alert("Você perdeu!")
            vida2 = 100
            vida1 = 100
        } else {
            if (barra_super >= 100){
                let sup = 30
                vida2 -= 30
            }
            vidajiren.innerHTML = `${vida2}`
            vidagoku.innerHTML = `${vida1}` 
        }
    }
}   