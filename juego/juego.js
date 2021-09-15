let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

alert ("Bienvenido al juego Oso vs. Cazadores. Eres un oso marrón que quiere llegar al bosque pero unos cazadores grises bloquean tu camino, tienes 3 vidas y perderás una cada vez que te atrape un cazador, pero puedes recuperar vidas si nadas en el lago. Llega al bosque antes de que se acabe tu tiempo!!! Para moverte usa las flechas del teclado. Para reiniciar y volver a jugar recarga la página.")

//cronometro
  var cronometro;
   function iniciaCronometro() {
      var segundos = 40;
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
            clearInterval(cronometro)
              alert("Se acabó tu tiempo");
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
    iniciaCronometro()
 
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

function dibujarÁrboles(x2,y2){
  ctx.beginPath()
  ctx.strokeStyle='lightgreen'
  ctx.fillStyle= 'lightgreen'
  ctx.moveTo(x2,y2)
  ctx.lineTo(x2-10,y2+25)
  ctx.lineTo(x2+10, y2+25)
  ctx.lineTo(x2,y2)
  ctx.stroke()
  ctx.fill()
  ctx.beginPath()
  ctx.strokeStyle='maroon'
  ctx.fillStyle='maroon'
  ctx.fillRect(x2-5,y2+25, 10, 10)
  ctx.stroke()
  ctx.fill()
}
for (let y2=5; y2<470; y2=y2+60){
  for(let x2=1120; x2<1260; x2=x2+40){
    dibujarÁrboles(x2,y2)
  }
}

// lago
let x3 = 640
let y3 = 40
let color3 = "darkblue"

function dibujarLago(x3,y3,color3){
  ctx.beginPath()
  ctx.strokeStyle = color3
  ctx.fillStyle = color3
  
  ctx.fillRect(x3,y3,120,120);
  ctx.stroke()
  ctx.fill()
}
dibujarLago(x3,y3,color3)

// olas
function dibujarOlas(x5, y5){
  ctx.beginPath()
  ctx.strokeStyle = 'lightblue'
  ctx.moveTo(x5,y5)
  ctx.lineTo(x5-7,y5+8)
  ctx.moveTo(x5+7,y5+8)
  ctx.lineTo(x5,y5)
  ctx.stroke()
}
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,50)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,70)
  }
  for(let x5=660; x5<740; x5=x5+37){
    dibujarOlas(x5,90)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,110)
  }
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,130)
  }




// obstáculo en movimiento 
function dibujarObstáculo(color1, x1, y1) { 
  ctx.beginPath()
  ctx.strokStyle= color1;
  ctx.fillStyle= color1;
  ctx.fillRect(x1,y1,25,50);
}

function dibujarObstáculo2(color1, x4, y4) { 
  ctx.beginPath()
  ctx.strokStyle= color1;
  ctx.fillStyle= color1;
  ctx.fillRect(x4,y4,25,50);
}

let y1 = 0;
let x1 = 400
let y4 = 0;
let x4 = 1000
let color1 = 'darkgrey';
let vY = 0;
let dT = 30;
let vY2 = 0;
let dT2 = 30;

function moverYDibujarObstáculo(){
  ctx.clearRect(0,0, 1260, 480);
  let vY=200;
  let vY2=300;
  let dY = dT/1000 *vY;
  let dY2 = dT2/1000 *vY2;
  if (y1<400){
  y1 = y1 + dY;
} 
  else {y1=0}

  if (x>1100 || vidas==0) {
    clearInterval(cronometro) 
    vY=0
    vY2=0
    y1=0
    y4=0
  }

  if (y4<400){
    y4 = y4 + dY2;
  } 
    else {y4=0}
  
    if (x>1100) { 
      vY2=0;
    y4=0
  }
  dibujarObstáculo(color1, x1, y1)
  dibujarObstáculo2(color1, x4, y4)
  dibujarLago(x3,y3,color3)
  dibujarOso (x,y,r,color)
  dibujarBosque()
  for (let y2=5; y2<470; y2=y2+60){
    for(let x2=1120; x2<1260; x2=x2+40){
      dibujarÁrboles(x2,y2)
    }
  }
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,50)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,70)
  }
  for(let x5=660; x5<740; x5=x5+37){
    dibujarOlas(x5,90)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,110)
  }
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,130)
  }
  colision()
}

//Avisa que hubo colision
let vidas=3
function colision(){
  if ( (x+25)>x1 && x<(x1+25) && y<(y1+50) && (y+25)>y1 && vidas!==0)
   { if (vidas==1){ 
      vidas=0
      clearInterval(cronometro)
      alert("Chocaron!!. Perdiste!!")
    }
    else {
    vidas= vidas-1
    x=x-50
       alert("Chocaron!!. Te quedan "+vidas+" vidas")
         }
   }

   if ( (x+25)>x4 && x<(x4+25) && y<(y4+50) && (y+25)>y4 && vidas!==0)
   { if (vidas==1){ 
      vidas=0
      clearInterval(cronometro)
      alert("Chocaron!!. Perdiste!!")
    }
    else {
    vidas= vidas-1
    x=x-50
       alert("Chocaron!!. Te quedan "+vidas+" vidas");
         }
   }
  }

//Avisa que ganó vidas en el Lago
function colisionLago(){
   if ( (x+25)>x3 && x<(x3+120) && y<(y3+120) && (y+25)>y3 && vidas!==0)
   { if (vidas==3){ 
      x=x-145
    alert("Ya tienes el máximo de vidas!")
      
      } 
    else {
    vidas= vidas+1
    x=x-145
       alert("Felicidades!!. Ahora tienes "+vidas+" vidas")}
   }
  }

// movimiento del oso
function moverYDibujar(){
  ctx.clearRect(0,0, 1260, 700);
  dibujarOso(x,y,r,color)
  dibujarBosque()
  dibujarLago(x3,y3,color3)
  dibujarObstáculo(color1, 400, y1)
  dibujarObstáculo2(color1, 1000, y4)
  for (let y2=5; y2<470; y2=y2+60){
    for(let x2=1120; x2<1260; x2=x2+40){
      dibujarÁrboles(x2,y2)
    }
  }
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,50)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,70)
  }
  for(let x5=660; x5<740; x5=x5+37){
    dibujarOlas(x5,90)
  }
  for(let x5=680; x5<720; x5=x5+35){
    dibujarOlas(x5,110)
  }
  for(let x5=700; x5<720; x5=x5+35){
    dibujarOlas(x5,130)
  }

  }

window.onkeydown = function(event){
             //Finaliza el juego
           if (x>1100) { 
            clearInterval(cronometro)
              alert("Ganaste!!");
           }
if (event.code == "ArrowRight" && cronometro>0 && x<1100 && vidas>0){
      x=x+4
      moverYDibujar()
      colision()
      colisionLago()

  }

  if (event.code=="ArrowLeft" && cronometro>0 && x<1100 && vidas>0){
        if (x>25) {
      x=x-4}
      moverYDibujar()
      colision()
      colisionLago()
    }
  if (event.code=="ArrowUp"&& cronometro>0 && x<1100 && vidas>0){
     if (y>25) {
      y=y-4}
      moverYDibujar()
      colision()
      colisionLago()
  }
  if (event.code=="ArrowDown" && cronometro>0 && x<1100 && vidas>0){
    if (y<440) {
      y=y+4}
      moverYDibujar()
      colision()
      colisionLago()
    }

}

  //Inicia el juego
  document.querySelector("#juego-normal")
  .addEventListener("click", Inicia);
        //Inicia varias acciones
        function Inicia() {
         iniciaCronometro()
        
         moverYDibujarObstáculo()
         if (vY>0){
          window.setInterval(moverYDibujarObstáculo, dT)}
        }
