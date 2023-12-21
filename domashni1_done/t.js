function projectCreation(input){
    let name= (input[0])
    let hours=Number(input[1])
    let num= Number(input[2])
    console.log(`The architect ${name} will need ${hours} hours to complete ${num} project/s.`)
}
projectCreation(["George","12","4"])