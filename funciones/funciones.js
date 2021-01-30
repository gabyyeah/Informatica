function areaCirc(r)
    {   let area=Math.PI*(Math.pow(r,2))
        return area
    }



function volEsfera (r)
{
    let volumen=4/3*Math.PI*(Math.pow (r,3))
    return volumen
}


function max (a,b)
{
    if(a>b){
        return a
    } else{
        return b
    }
    
}

function masLarga (p1,p2){
    if(p1.length>p2.length){
        return p1
    }else{
        return p2
    }
}
let p1=prompt("Ingrese p1")
let p2=prompt("Ingrese p2")
alert(`La palabra más larga es ${masLarga(p1,p2)}`)


function imprimirMasLarga (palabra1,palabra2){
    if(palabra1.length>palabra2.length){
        return palabra1
    }else{
        return palabra2
    }
}
let palabra1=prompt("Ingrese palabra1")
let palabra2=prompt("Ingrese palabra2")
console.log(`La palabra más larga es ${imprimirMasLarga(palabra1,palabra2)}`)


function fibonacci(n){
    n= n-1+n-2
    return n
}