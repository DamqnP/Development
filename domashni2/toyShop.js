function toyShop(input){
let tripPrice=Number(input[0])
let puzzelSum=Number(input[1])
let dollsSum=Number(input[2])
let bearSum=Number(input[3])
let minionSum=Number(input[4])
let truckSum=Number(input[5])

let Sum=puzzelSum*2.60+dollsSum*3+bearSum*4.10+minionSum*8.20+truckSum*2;
let toyCount=puzzelSum+dollsSum+bearSum+minionSum+truckSum
if(toyCount>50){
    let discount=Sum*0.25
    Sum-=discount
}
let Naem=Sum*0.1
let Price= Sum-Naem
if(Price>tripPrice){
    let restMoney=Price-tripPrice
        console.log(`Yes! ${restMoney.toFixed(2)} lv left.`)
}else{
    console.log(`Not enough money! ${(tripPrice-Price).toFixed(2)} lv needed.`)
}




}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])