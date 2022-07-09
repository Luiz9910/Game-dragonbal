var vida2 = 100
var vida1 = 100
function attack() {
    let vidajiren = window.document.getElementById("vidajiren")
    let vidagoku = window.document.getElementsByClassName("vidagoku")[0]
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
