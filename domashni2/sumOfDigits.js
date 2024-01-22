function sumOfDigits(num){
let sum=0;
let numAsStr=num.toString();
for(let i=0;i<numAsStr.length;i++){
    sum+=Number(numAsStr[i]);
    
}
console.log(sum);
}
sumOfDigits(245678);