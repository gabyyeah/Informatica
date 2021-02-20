let tareas=[
    {materia: "Italiano", descripción: "Analizar una poesía", fecha: "01-03-21"},
    {materia: "Español", descripción: "Leer 12 capítulos de Don Quijote de la Mancha", fecha: "17-02-21"},
    {materia: "Matemátcas", descripción: "Hacer la gráfica de una función exponencial", fecha: "20-02-21"},
    {materia: "Inglés", descripción: "Grabar un video haciendo una representación del soliloquio de Hamlet", fecha: "26-02-21"},
    {materia: "Física", descripción: "Resolver los ejercicios de MCU", fecha: "19-02-21"},
    {materia: "Ciencias", descripción: "Grabar un video explicando una enzima de su elección", fecha: "09-09-21"}
]

let tabla=document.querySelector("#tareas")

function llenarTabla (){
    let contenido= "<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>"
    for (tarea of tareas){
        contenido= contenido + `<tr><td>${tarea.materia}</td><td>${tarea.descripción}</td>
        <td>${tarea.fecha}</td></tr>`
    }
    tabla.innerHTML = contenido
}

let form=document.querySelector("form")

function nuevaTarea(){
    let materiaNueva= document.querySelector("input[name=materia]").value
    let descripciónNueva = document.querySelector("input[name=descripción]").value
    let fechaNueva = document.querySelector("input[name=fecha]").value
    let tareaNueva = {materia:materiaNueva, descripción:descripciónNueva, fecha:fechaNueva}
    console.log(tareaNueva)
    tareas.push(tareaNueva)
    llenarTabla();
    return false;
}

form.onsubmit = nuevaTarea;