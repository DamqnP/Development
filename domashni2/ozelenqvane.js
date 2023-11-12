function ozelenqvane(input){
let kvmetrikoitoshebudatozeleneni=Number(input[0])
let price=kvmetrikoitoshebudatozeleneni*7.61
let discount=price*0.18
let sum=price-discount
console.log(`The final price is: ${sum} lv.`)
console.log(`The discount is: ${discount} lv.`)
}
ozelenqvane(["550"])