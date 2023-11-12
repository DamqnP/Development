function worldRecord(input){
let record=Number(input[0])
let razstoqnie=Number(input[1])
let timeInSec=Number(input[2])

let neededTime=razstoqnie*timeInSec
let newMeters=Math.floor(razstoqnie/15)*12.5
let totalTime= neededTime+newMeters
if(totalTime<record){

    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}else{
    console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`)
}


}
worldRecord(["10464",
"1500",
"20"])




//Рекордът в секунди – реално число в интервала [0.00 … 100000.00]
//Разстоянието в метри – реално число в интервала [0.00 … 100000.00]
//Времето в секунди, за което плува