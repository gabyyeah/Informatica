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
let x = 40
let y = 275
let r = 25
let color = "maroon"

function dibujarOso(x,y,r,color){
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.fillStyle = color
    
    ctx.arc(x, y, r, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()
}
dibujarOso(x,y,r,color)

//bosque
function dibujarBosque(){
    ctx.beginPath()
    ctx.strokeStyle='darkgreen'
    ctx.fillStyle= 'darkgreen'
    ctx.fillRect(1100,0,400,557)
    ctx.stroke()
    ctx.fill()
}  

dibujarBosque()

// obstáculo en movimiento
function dibujarObstáculo(color1, x1, y1) { 
  ctx.beginPath()
  ctx.strokStyle= color1;
  ctx.fillStyle= color1;
  ctx.fillRect(x1,y1,-20,50);
}

let x1 = 1000;
let y1 = 0;
let color1 = 'darkgrey';

let vY = 10;
let dT = 30;

function moverYDibujarObstáculo(){
  ctx.clearRect(0,0, 1260, 480);
  let dY = dT/1000 *vY
  y1 = y1 + dY;

  dibujarObstáculo(color1, x1, y1)
  dibujarOso (x,y,r,color)
  dibujarBosque()
}

window.setInterval(moverYDibujarObstáculo, dT);

// movimiento del oso

function moverYDibujar(){
  ctx.clearRect(0,0, 1260, 700);
  dibujarOso(x,y,r,color)
  dibujarBosque()
  dibujarObstáculo(color1, x1, y1)
}

window.onkeydown = function(event){
  if (event.code == "ArrowRight"){
     x=x+50
     moverYDibujar()
  }
  if (event.code=="ArrowLeft"){
    if (x>40) {
      x=x-50}
      moverYDibujar()
  }
  if (event.code=="ArrowUp"){
    if (y>25) {
      y=y-50}
      moverYDibujar()
  }
  if (event.code=="ArrowDown"){
    if (y<425) {
      y=y+50}
      moverYDibujar()
  }
}
