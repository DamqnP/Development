function mominskoParty(input){
let priceParty=Number(input[0])
let loveSum=Number(input[1])
let rosesSum=Number(input[2])
let keysSum=Number(input[3])
let karikaturiSum=Number(input[4])
let luckSurpriseSum=Number(input[5])

let sum=(loveSum*0.60)+(rosesSum*7.20)+(keysSum*3.60)+(karikaturiSum*18.20)+(luckSurpriseSum*22)   
let articulSum=loveSum+rosesSum+keysSum+karikaturiSum+luckSurpriseSum

if(articulSum>25){
    let discount=0.35

let newSum=sum*discount
let finalPrice=sum-newSum

let razhodHosting=finalPrice*0.1
let lottery=finalPrice-razhodHosting
if(lottery>priceParty){
     restMoney=lottery-priceParty
}console.log(`Yes! ${restMoney.toFixed(2)} lv left.`)

}else{
let razhodHosting=sum*0.1
let lottery =sum-razhodHosting
if(lottery<priceParty){
     restMoney=priceParty-lottery
    console.log(`Not enough money! ${restMoney.toFixed(2)} lv needed.`)
}
}





}
mominskoParty(["40.8",
"20",
"25",
"30",
"50",
"10"])