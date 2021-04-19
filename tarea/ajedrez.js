let canvas= document.querySelector("#canvas")
let ctx= canvas.getContext("2d")
ctx.strokeStyle='black'
    ctx.fillStyle='white'
ctx.fillRect(10, 20, 250, 220)
ctx.strokeRect(10, 20, 250, 220)

function dibujarPeon (xC, yC, r){
    ctx.beginPath()
    ctx.strokeStyle='black'
    ctx.fillStyle='black'

    ctx.moveTo(xC,yC)
    ctx.lineTo(xC-10,yC+25)
    ctx.lineTo(xC+10, yC+25)
    ctx.lineTo(xC,yC)

    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(xC, yC, r, 0, 2*Math.PI)

    ctx.stroke()
    ctx.fill()

}

for(let x=30; x<250; x=x+30){
    dibujarPeon(x,40,10)
}


for(let x=30; x<250; x=x+30){
    dibujarPeon(x,200,10)
}