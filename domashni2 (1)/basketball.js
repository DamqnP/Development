function basketball(input){
let tax=Number(input[0])
let sneakersPrice=tax-(tax*0.4)
let equipmentPrice=sneakersPrice-(sneakersPrice*0.2)
let basketballPrice=equipmentPrice/4
let accesories=basketballPrice/5
let finalSum=sneakersPrice+equipmentPrice+basketballPrice+accesories+tax
console.log(finalSum)




}
basketball(["365"])