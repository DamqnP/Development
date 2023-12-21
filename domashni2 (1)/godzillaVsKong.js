function godzillaVsKong(input){
    let budget=Number(input[0])
    let externals=Number(input[1])
    let externalClothingPrice=Number(input[2])

    let dekorSum=budget*0.1 
    let totalSumExternalClothing=externals*externalClothingPrice
    let totalSum=dekorSum+totalSumExternalClothing
    if(externals>150){
        let discount=totalSumExternalClothing*0.1
        totalSumExternalClothing-=discount
    }

    else if(dekorSum && totalSumExternalClothing<=budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget-totalSum).toFixed(2)} leva left.`)

    }else{
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalSum-budget).toFixed(2)} leva more.`)
    }


    
}
godzillaVsKong(["20000",
"120",
"55.5"])
