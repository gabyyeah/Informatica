let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "orange"
ctx.strokeStyle = "black"

// lápiz
// rectángulo

ctx.fillRect(350, 200 , 180, 35)
ctx.lineWidth= 1
ctx.strokeRect(350, 200,180, 35)

// triángulos punta
ctx.beginPath()
ctx.moveTo(313,217.5)
ctx.lineTo(348,200)
ctx.lineTo(348,235)
ctx.closePath()

ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "lightyellow";
ctx.fill();

ctx.beginPath()
ctx.moveTo(313,217.5)
ctx.lineTo(320,214)
ctx.lineTo(320,221)
ctx.closePath()

ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "black";
ctx.fill();

// borrador

ctx.beginPath()
ctx.moveTo(530,200)
ctx.lineTo(530,200)
ctx.arc(540, 217.5, 17, -Math.PI/2, Math.PI/2)
ctx.lineTo(530,235) 

ctx.lineWidth = 1.5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "white";
ctx.fill(); 

// ctx.endPath()

// celular

// rectángulos
ctx.fillRect(200, 400 , 170, 300)
ctx.strokeRect(200, 400,170, 300)

ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillStyle = "black";
ctx.fill(); 


ctx.fillRect(210, 420 , 150, 250)
ctx.strokeRect(210, 420,150, 250)


ctx.lineWidth = 1;
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fillStyle = "gray";
ctx.fill(); 

// círculo botón

ctx.beginPath();
ctx.arc(280, 685,10,0,2*Math.PI);

ctx.lineWidth = 1.5;
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();


// aplicaciones

ctx.fillRect(220, 435 , 24, 24)
ctx.strokeRect(220, 435 , 24, 24)
ctx.lineWidth = 1.5;
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(255, 435 , 24, 24)
ctx.strokeRect(255, 435 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(290, 435 , 24, 24)
ctx.strokeRect(290, 435 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(325, 435 , 24, 24)
ctx.strokeRect(325, 435 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "pink";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(220, 470, 24, 24)
ctx.strokeRect(220, 470 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "lightblue";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(255, 470, 24, 24)
ctx.strokeRect(255, 470 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(290, 470, 24, 24)
ctx.strokeRect(290, 470 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(325, 470, 24, 24)
ctx.strokeRect(325, 470 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "orange";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(220, 505, 24, 24)
ctx.strokeRect(220, 505 , 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(255, 505, 24, 24)
ctx.strokeRect(255, 505, 24, 24)

ctx.lineWidth = 1.5;
ctx.fillStyle = "purple";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

ctx.fillRect(290, 505, 24, 24)
ctx.strokeRect(290, 505 , 24, 24)

ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();







