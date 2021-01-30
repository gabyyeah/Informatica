let numero;
do{
    numero=parseFloat(prompt("Ingrese un numero"));
} while(isNaN(numero)||numero<0)
console.log(`La raiz cuadrada es: ${Math.sqrt(numero)}`);