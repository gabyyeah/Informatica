let total=0
let sumando=1
while(sumando<=10000)
{
    console.log(`Total: ${total}. Sumando: ${sumando}`)
    total=total+sumando*sumando
    sumando=sumando+1
}
console.log(`La suma es: ${total}`)