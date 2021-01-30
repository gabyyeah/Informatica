let sm=0
let r=3
let t=5
do{
    if(r<t){
        sm=sm+r
        r=r+3
    }
     else{
        sm=sm+t
        t=t+5
     }
} while (t<=10000)
console.log(sm)
alert(sm)