let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

//Finaliza el juego
//function timeOver() {
  //clearInterval(cronometro);
 // function alerta (){
    //alert("Se acabo tu tiempo");
   // document.querySelector("#timeOver").classList.add("visible");
  //} 
  

  //Inicia el juego
  document.querySelector("#juego-normal")
  .addEventListener("click", iniciaCronometro);
  //document.querySelector("#juego-normal")
  //.addEventListener("click", draw);
  
  //cronometro
  var cronometro;
  function iniciaCronometro() {
      var segundos = 10;
      var minutos = 0;
      var segundosTexto;
      var minutosTexto;
    
      function actualizaContador() {
        segundos--;
        
        if (segundos < 0) {
          segundos = 59;
          minutos--;
        }
        if (minutos < 0) {
          segundos = 0;
          minutos = 0;
          clearInterval(cronometro);
          timeOver();
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if (segundos < 10) {
          segundosTexto = "0" + segundos;
          if (segundos == 0) { 
            //Finaliza el juego
            function alerta (){
              alert("Se acabo tu tiempo");
            } 
            alerta()
           }
        }
        if (minutos < 10) {
          minutosTexto = "0" + minutos;
        }
        document.querySelector("#minutos").innerText = minutosTexto;
        document.querySelector("#segundos").innerText = segundosTexto;
      }
      cronometro = setInterval(actualizaContador, 1000);
    }



// oso 
let xC = 40;
let yC = 275;
let r = 25;
let color = "maroon";

ctx.beginPath();
ctx.strokeStyle = color
ctx.fillStyle = color;

ctx.arc(xC, yC, r, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

window.onkeydown = function(event){
    if (event.code == "ArrowRight")
    {
        xC=xC+50
    }
    if (event.code=="ArrowLeft"){
        xC=xC-50
    }
    if (event.code=="ArrowUp"){
        yC=yC-50
    }
    if (event.code=="ArrowDown"){
        yC=yC+50
    }
}

//bosque
ctx.beginPath()
ctx.strokeStyle='darkgreen'
ctx.fillStyle= 'darkgreen'
ctx.fillRect(1100,0,400,557)
ctx.stroke()
ctx.fill()
    
//Nuevo cazador
  
function draw() {
    let x=0;
    let vX=2;  
    ctx.beginPath()
    ctx.strokStyle='darkgrey';
    ctx.fillStyle= 'darkgrey';
    ctx.fillRect(1100,0,-20,50);
    ctx.moveTo(x,y);
      if (x>=1260 || x<0){
      vX=vX*-1;
      }
      x=x+vX;
  }
  draw();
  ctx.moveto();