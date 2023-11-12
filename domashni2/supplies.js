function suppliesForSchool(input){
let penCount=Number(input[0])
let markerCount=Number(input[1])
let litterDetergent=Number(input[2])
let discount=Number(input[3])/100
let penPrice=penCount*5.8
let markersPrice=markerCount*7.2
let detergentPrice=litterDetergent*1.2
let currentPrice=penPrice+markersPrice+detergentPrice
let finalSum=currentPrice-currentPrice*discount
console.log (finalSum)
}
suppliesForSchool(["2","3","4","25"])