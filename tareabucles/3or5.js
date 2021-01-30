let sma=0
let q=3
let k=5
do{
    if(q==k) {
        q=q+3
        k=k+5
    }
     else{ 
        if(q<k){
        sma=sma+q
        q=q+3
        }
        else{
        sma=sma+k
        k=k+5
        }
     }
} while (k<=10000)
console.log(sma)
alert(sma)