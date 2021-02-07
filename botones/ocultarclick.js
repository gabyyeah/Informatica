let boton2 = document.querySelector("#ocultarclick")
let parrafo2 = document.querySelector("#parrafo2")

boton2.onclick = ocultaryaparecer
  

function ocultaryaparecer(){
    if (parrafo2.innerHTML == ""){
        parrafo2.innerHTML = "MBTI son las siglas para referirnos al Myers-Briggs Type Indicator, un instrumento diseñado para evaluar la personalidad a partir de nuestras respuestas acerca de cómo nos sentimos o actuamos en situaciones particulares."
    }
    else{
        parrafo2.innerHTML = ""
    }
    
}
