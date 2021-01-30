let ancho
let alto
let linea
let nColumna
do{
    ancho=parseFloat(prompt("Ingrese el ancho"))
} while (isNaN(ancho)|| ancho<1)

do{
    alto=parseFloat(prompt("Ingrese el alto"))
} while(isNaN(alto)||alto<1)

let nLinea=0
while(nLinea<alto){
    linea=""
    nColumna=0
    while (nColumna<ancho){
        if(nLinea==nColumna){
          linea=linea+" "  
        } else{
            linea=linea+"*"  
        }  
        nColumna=nColumna+1
    }
    console.log(linea)
    nLinea=nLinea+1
}

console.log("")


nLinea=0
while(nLinea<alto){
    linea=""
    nColumna=0
    while (nColumna<ancho){
        linea=linea+"*"   
        nColumna=nColumna+1
    }
    console.log(linea)
    nLinea=nLinea+1
}

console.log("")

nLinea=0
while(nLinea<=alto){
    linea=""
    nColumna=0
    while(nColumna<=ancho){
        if(nLinea==0||nLinea==alto){
            linea=linea+"*"
        } else if (nColumna==0||nColumna==ancho){
            linea=linea+"*"
        } else{
            linea=linea+" "
        }
        nColumna=nColumna+1
    }

console.log(linea)

nLinea=nLinea+1
}

console.log("")

nLinea=0
while(nLinea<alto){
    linea=""
    nColumna=0
    while(nColumna<ancho){
        if(nLinea<=nColumna){
            linea=linea+"*"
           
        } else{
            linea=linea+" "
        }
        nColumna=nColumna+1
    }
console.log(linea)
nLinea=nLinea+1
}

console.log("")

nLinea=0
while(nLinea<alto){
    linea=""
    nColumna=0
    while(nColumna<ancho){
        if(nLinea>=nColumna){
            linea=linea+"*" 
        } else{
            linea=linea+" "
        }
        nColumna=nColumna+1
    }
console.log(linea)
nLinea=nLinea+1
}

console.log("")

nLinea = 0;
while (nLinea < ancho|| nColumna<alto) {
    linea = "";
    nColumna = 0;
     while(nColumna<nLinea){
         nColumna=nColumna+1;
         linea = linea + " ";
        }
        nColumna = 0;
        while (nColumna < ancho || nColumna<alto) {
            nColumna=nColumna+1;
            linea = linea + "*";
        }
        linea=linea+"*";   
        console.log(linea);
        nLinea = nLinea + 1;
        }

 console.log("")

nLinea = 0;
    while (nLinea < ancho|| nLinea< alto) {
    linea = "";
    nColumna = 0;
    while(nColumna<ancho-nLinea || nColumna<alto-nLinea){
        nColumna=nColumna+1;
        linea = linea + " ";
    }
    nColumna = 0;
    while (nColumna < alto || nColumna<ancho) {
        if(nLinea==0||nLinea==alto-1||nLinea==ancho-1||nColumna==0||nColumna==alto-1||nColumna==ancho-1){
            linea = linea + "*";
        }
        else{
        linea=linea+" ";
    }    
        nColumna=nColumna+1; 
    }
    linea=linea+"*";   
    console.log(linea);
    nLinea = nLinea + 1;
    }

    console.log("")
    
    nLinea = 0;
    while (nLinea < ancho|| nLinea< alto) {
    linea = "";
    nColumna = 0;
    while(nColumna<nLinea){
        nColumna=nColumna+1;
        linea = linea + " ";

    }
    nColumna = 0;
    while (nColumna < ancho|| nColumna< alto) {
        if(nLinea==0||nLinea==ancho-1||nLinea==alto-1||nColumna==0||nColumna==alto-1||nColumna==ancho-1){
            linea = linea + "*";
        }
        else{
        linea=linea+" ";
    }    
        nColumna=nColumna+1;
        
    }
    linea=linea+"*";   
    console.log(linea);
    nLinea = nLinea + 1;
    }

console.log(" ")

nLinea = 0;
while (nLinea < alto || nLinea<ancho) {
    linea = "";
    nColumna = nLinea
    
    while (nColumna < alto-1||nColumna < ancho-1) {
        linea = linea + " ";
        nColumna=nColumna+1;
    }
    nColumna=0
    while (nColumna <= nLinea){
        if(nLinea==ancho-1||nLinea==alto-1||nColumna==0||nColumna==nLinea){
            linea = linea + "*";
        }
        else{
           linea = linea + " ";

        }
        nColumna=nColumna+1
       
    }
    
    linea=linea+"*";   
    console.log(linea);
    nLinea = nLinea + 1;
 }

