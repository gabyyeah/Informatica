let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color;

    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 600;
let y = 0;
let r = 20;
let color = "red";

let vY = 10;
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 900, 700);
    let dY = dT/1000 *vY
    y = y + dY;

    dibujarPelota(x, y, r, color);
}

function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}
window.setInterval(moverYDibujar, dT);

window.onkeyup = function(event){
    console.log(event.code);
    if (event.code == "Space")
    {
        arrancarOParar();
    }
    if (event.code == "BracketRight")
    {
        r=r+1;
    }
    else if (event.code == "Slash")
    {
        r=r-1;
    }
}

function cambiarColor() {
 color= "#" + Math.floor(Math.random()*16777215).toString(16)
}
window.onclick=function(event){
    let disX=event.offsetX
    let disY=event.offsetY
    distanciaPelota= Math.sqrt(Math.pow(disX-x,2)+ Math.pow(disY-y,2))
    if (distanciaPelota<=r){
        cambiarColor()
    }
    else{
        vY=-vY
    }
}