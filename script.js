let vida2 = 100
let vida1 = 100
var vidajiren = window.document.getElementById("vidajiren")
var vidagoku = window.document.getElementsByClassName("vidagoku")[0]
var barra_super = 0

function attack() {
    vida1 -= 9
    vida2 -= 10
    vidajiren.innerHTML = `${vida2}`
    vidagoku.innerHTML = `${vida1}` 
    if (vida2 == 0) {
        window.alert("Você venceu!")
        vida2 = 100
        vida1 = 100
    } 
}

function defesa() {
    vida1 -= 2
    vidagoku.innerHTML = `${vida1}` 
    if (vida2 == 0) {
        window.alert("Você venceu!")
        vida2 = 100
        vida1 = 100
    } 
}

function supe() {

}
