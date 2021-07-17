let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

// oso 

function dibujarOso(xC, yC, r, color){
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;

    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
} 
let x = 40;
let y = 275;
let r = 25;
let color = "maroon";

let vX = 0;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 900, 700);
    let dX = dT/1000 *vX
    x = x + dX;

    dibujarOso(x, y, r, color);
}

window.setInterval(moverYDibujar, dT)

window.onkeydown = function(event){
    console.log(event.code);
    if (event.code == "ArrowRight")
    {
        x=x+50
    }
    if (event.code=="ArrowLeft"){
        x=x-50
    }
    if (event.code=="ArrowUp"){
        y=y-50
    }
    if (event.code=="ArrowDown"){
        y=y+50
    }
}

//bosque
ctx.beginPath()
    ctx.strokeStyle='darkgreen'
    ctx.fillStyle= 'darkgreen'
    ctx.fillRect(1100,0,400,557)
    ctx.stroke()
    ctx.fill()
    