function depositCalculator(input){
let deposit=Number(input[0])
let term=Number(input[1])
let annualInterestRate=Number(input[2])/100

let sum=deposit+term*((deposit*annualInterestRate)/12)
console.log (sum)
}

depositCalculator(["200","3","5.7"])