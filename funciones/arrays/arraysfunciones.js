let n1=0
let suma1=0

function promedio (notas1)
{ while(n1<=(notas1.length-1)){
    suma1=suma1+notas1[n1]
    n1=n1+1
    console.log(n1)
    console.log(suma1)
  }
  
  console.log(notas1.length)
  console.log (suma1/(notas1.length-1))
}

let numeroNotas1
let nota1

do{
    numeroNotas1=parseFloat(prompt("ingresa el numero de tus notas (2)"))
} while (numeroNotas1<=0 || numeroNotas1%1!=0) 

let numeroInicialNotas1=0
let notas1=[0]
do{
    nota1=parseFloat(prompt("ingresa tus notas (2)"))
    numeroInicialNotas1=numeroInicialNotas1+1
    notas1.push(nota1)
} while (numeroInicialNotas1!=numeroNotas1) 
console.log (notas1)

promedio (notas1)



let cantidadPalabras;
    do {
    cantidadPalabras = parseFloat(prompt("Ingrese cantidad de palabras"))
    } while (isNaN(cantidadPalabras) ||  cantidadPalabras < 1);
    let  palabras=[];
    let t=0;
while(t<cantidadPalabras){
    let palabra = prompt("Ingresa la palabra")
        t=t+1;
        palabras.push(palabra);
}
let long=0;
long=palabras.length;
let i=0;
let concatenar="";
while(i<long){
   concatenar+=palabras[i] + " ";
   i=i+1;
}
alert(`Concatenación: ${concatenar}`);

