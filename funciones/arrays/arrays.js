let numeroNotas
let nota

do{
    numeroNotas=parseFloat(prompt("ingresa el numero de tus notas"))
} while (numeroNotas<=0 || numeroNotas%1!=0) 

let numeroInicialNotas=0
let notas=[0]
do{
    nota=parseFloat(prompt("ingresa tus notas"))
    numeroInicialNotas=numeroInicialNotas+1
    notas.push(nota)
} while (nota>10 || nota<0 || numeroInicialNotas!=numeroNotas) 
console.log (notas)

let n=0
let suma=0
while(n<=numeroNotas){
    suma=suma+notas[n]
    n=n+1
}
console.log(suma/numeroNotas)
