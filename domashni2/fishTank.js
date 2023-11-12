function fishTank(input){
let length=Number(input[0])
let width=Number(input[1])
let height=Number(input[2])
let percentage=Number(input[3])/100

let volume=length*width*height
let volumeInLitters=volume*0.001
let neededLitter=volumeInLitters*(1-percentage)
console.log(neededLitter)
}

fishTank(["85","75","47","17"])