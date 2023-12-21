function boat(input){
let budget=Number(input[0])
let season=input[1]
let fishermanNum=Number(input[2])

let summerPrice=4200;
let autumnPrice=4200;
let winterPrice=2600;
let spirngPrice=3000;


 if (season==="Summer" && fishermanNum>7 && fishermanNum<=11){
    let discount=summerPrice*0.15;
    summerPrice-=discount
    if(fishermanNum%2===0){
        discount*=0.5
    }if(budget<summerPrice){
        console.log(`Not enough money! You need ${(budget-summerPrice).toFixed(2)} leva.`)
    }


 }



}
boat(["3000",

"Summer",

"11"])