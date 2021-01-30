let masa
let estatura
let bmi
do{
    masa=parseFloat(prompt("Ingrese su masa"))
} while(masa<=0 || isNaN(masa))
do{
    estatura=parseFloat(prompt("Ingrese su estatura"))
} while(isNaN(estatura) || estatura<=0)

bmi=masa/(estatura*estatura)

if(bmi<18.5){
alert("Underweight")
}
else if (bmi<24.99){
alert("Normal")
}
else if (bmi<=29.99){
  alert("Overweight")
 }
else{
 alert("Obese") }