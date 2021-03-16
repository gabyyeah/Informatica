let planetas = JSON.parse(localStorage.getItem("planetas"))

if (planetas == null) planetas = []

let tabla = document.querySelector('#planetas')
console.log(tabla)
function llenarTabla(){
    let contenidoTabla = '<tr><th>Nombre</th><th>Diámetro</th><th>Imagen</th></tr>'
    for (planeta of planetas){
        contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.diametro}</td>
        <td><img width="500px" src="${planeta.imagen}" alt=""></td></tr>`
    }
    tabla.innerHTML = contenidoTabla
}

let form = document.querySelector("#formularioAdd")

function addPlanet(){
    let nombreNuevo = document.querySelector("input[name=nombre]").value
    let diametroNuevo = parseFloat(document.querySelector("input[name=diametro]").value)
    let urlNuevo = document.querySelector("input[name=urlImagen]").value
    let planetaNuevo = {nombre:nombreNuevo, diametro:diametroNuevo, imagen:urlNuevo}
    console.log("Ahora voy a añadir el siguiente planeta")
    console.log(planetaNuevo)

    planetas.push(planetaNuevo)
    
    // Guardo la lista de planetas en el almacenamiento local
    localStorage.setItem("planetas", JSON.stringify(planetas));

    llenarTabla();
}

form.onsubmit = addPlanet;

// Para borrar un planeta
let formBorrar = document.querySelector("#formularioDelete");

function deletePlanet(){
    let nombrePlanetaABorrar = document.querySelector("#formularioDelete input[name=nombre]").value
    console.log("Ahora voy a borrar el siguiente planeta");
    console.log(nombrePlanetaABorrar)
    
    let aBorrar = planetas.findIndex(planeta => planeta.nombre == nombrePlanetaABorrar);
    if(aBorrar == -1) alert("Planeta no encontrado");
    else planetas.splice(aBorrar, 1);
    llenarTabla();
    return false;
}
formBorrar.onsubmit = deletePlanet;

llenarTabla();