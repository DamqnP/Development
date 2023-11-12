function paint(input){
let nylon=Number(input[0])
let paint=Number(input[1])
let thinner=Number(input[2])
let workHours=Number(input[3])

let nylonPrice=(nylon+2)*1.5
let addedPaint=paint*0.1
let paintPrice=(paint+addedPaint)*14.5
let thinnerPrice=thinner*5

let currentPrice=nylonPrice+paintPrice+thinnerPrice+0.4
let workersHourPrice=currentPrice*0.3
let totalWorkersPrice=workersHourPrice*workHours
let totalSum=currentPrice+totalWorkersPrice
console.log(totalSum)
}
paint(["10","11","4","8"])




//Сума за найлон: (10 + 2) * 1.50 = 18 лв. 
//Сума за боя: (11 + 10%) * 14.50 = 175.45 лв. 
//Сума за разредител: 4 * 5.00 = 20.00 лв. Сума за торбички: 0.40 лв. 
//Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв. 
//Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв.