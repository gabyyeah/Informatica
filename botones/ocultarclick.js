let boton2 = document.querySelector("#ocultarclick")
let parrafo2 = document.querySelector("#parrafo2")

boton2.onclick = ocultaryaparecer
  

function ocultaryaparecer(){
    if (parrafo2.innerHTML == ""){
        parrafo2.innerHTML = "parrafo 2 xd ufde dkedfkkmes"
    }
    else{
        parrafo2.innerHTML = ""
    }
    
}
