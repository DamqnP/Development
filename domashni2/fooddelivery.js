function foodDelivery(input){
let chickenMenu=Number(input[0])
let fishMenu=Number(input[1])
let veggieMenu=Number(input[2])

let chickenPrice=chickenMenu*10.35
let fishPrice=fishMenu*12.4
let veggiePrice=veggieMenu*8.15

let currentPrice=chickenPrice+fishPrice+veggiePrice
let dessertPrice=currentPrice*0.2
let totalSum=currentPrice+dessertPrice+2.5
console.log(totalSum)
}
foodDelivery(["2","4","3"])