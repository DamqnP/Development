
function pC(input){
    let budget=Number(input[0])
    let gpuCount=Number(input[1])
    let cpuCount=Number(input[2])
    let ramCount=Number(input[3])

    let gpuPrice=gpuCount*250
    let cpuPrice=cpuCount*(gpuPrice*0.35)
    let ramPrice=ramCount*(gpuPrice*0.1)

    let profit=gpuPrice+cpuPrice+ramPrice

if(gpuCount>cpuCount){
    let discount=profit*0.15
    profit=profit-discount
}
if(budget>=profit){
    console.log(`You have ${(budget-profit).toFixed(2)} leva left!`)
}else{
    console.log(`Not enough money! You need ${(profit-budget).toFixed(2)} leva more!`)
}





}
pC(["900",
"2",
"1",
"3"])