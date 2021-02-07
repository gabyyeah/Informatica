let boton3 = document.querySelector("#ocultar")
let parrafo3 = document.querySelector("#parrafo3")

boton3.onclick = ocultar 

function ocultar(){
    parrafo3.style.display = "none"
    setTimeout(aparecer, 3000);
}
function aparecer(){
    parrafo3.style.display = "block"
}