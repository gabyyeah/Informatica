let boton1 = document.querySelector("#color")
let parrafo1 = document.querySelector("#parrafo1")
boton1.onclick = cambiarColor
function cambiarColor(){
    let a = Math.floor(Math.random() * 226)
    let b = Math.floor(Math.random() * 226)
    let c = Math.floor(Math.random() * 226)
    parrafo1.style.color = `rgb(${a},${b},${c})`}
