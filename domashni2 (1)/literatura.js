function literatura (input){
let pageCount=Number(input[0])
let pagePerHour=Number(input[1])
let neededDays=Number(input[2])

let neededTime=pageCount/pagePerHour
let hoursPerDay= neededTime/neededDays
console.log (hoursPerDay)
}
literatura(["212","20","2"])