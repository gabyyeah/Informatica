let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")
let dT=30

// oso
ctx.beginPath()
    ctx.strokeStyle='black'
    ctx.fillStyle= 'maroon'

    ctx.arc(40, 275, 25, 0, 2*Math.PI)
    ctx.moveTo(50,255)

    ctx.arc(57, 255, 10, 0, 2*Math.PI)
    ctx.moveTo(25,255)
    ctx.arc(23, 255, 10, 0, 2*Math.PI)

    ctx.stroke()
    ctx.fill()

//lago

ctx.beginPath()
    ctx.strokeStyle='darkblue'
    ctx.fillStyle= 'darkblue'
    ctx.arc(600, 100, 25, 0, 2*Math.PI)
    ctx.stroke()
    ctx.fill()

//bosque
ctx.beginPath()
    ctx.strokeStyle='darkgreen'
    ctx.fillStyle= 'darkgreen'
    ctx.fillRect(1100,0,400,557)
    ctx.stroke()
    ctx.fill()
    
// cazadores
class Cazador{
    constructor(xC, yC, vX, vY, width, height, color){
            this.xC = xC
            this.yC = yC
            this.vX = vX
            this.vY = vY
            this.width=width
            this.height=height
            this.color = color
        }
    moverse(){
            let dX = dT/1000 *this.vX
            let dY = dT/1000 *this.vY
            this.xC = this.xC + dX
            this.yC = this.yC + dY
        }
    dibujarse(){
            ctx.beginPath()
            ctx.strokeStyle = this.color
            ctx.fillStyle = this.color
            ctx.fillRect(this.xC, this.yC, this.width, this.height,)
            ctx.stroke()
            ctx.fill()
        }
    }
    
    let cazador1 = new Cazador(0, 0, 10, 10, 15, "lightorange")
    let cazador2 = new Cazador(0, 400, 10, -10, 30, "red")
    let cazador3 = new Cazador(400,300,-10,0,20,"blue")
    let cazador4 = new Cazador(0, 0, 10, 10, 15, "green")

    let cazadores=[]
// funcion cazadores (mirar github briceño)
    function dibujarCazador(){
        let x = 600;
        let y = 200;
        let vX = -20;
        let vY = 20*Math.random() - 10;
        let color = "#" + Math.floor(Math.random()*16777215).toString(16);
        let pelotaNueva = new Cazador(x, y, vX, vY, 20, color);
    
        //añado la nueva pelota al array de pelotas
        pelotas.push(pelotaNueva);
    }
    