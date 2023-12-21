function validOrInvalidNum(input){
     let ourNum=Number(input[0])
     if(ourNum===0 || ourNum>=100 && ourNum<=200){
        ourNum=true
     }else{
        console.log("invalid")
     }
}
validOrInvalidNum(["75"])