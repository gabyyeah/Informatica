let contar=0
localStorage.setItem("visitas", contar)
let contarExistente=localStorage.getItem("visitas")
do{
    contar=contar+1
    alert("Ha visitado esta página "+ contar + " veces")
} while (contarExistente==contar)