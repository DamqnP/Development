function catDiet(input){
    let fatPercent=Number(input[0])
    let proteinPercent=Number(input[1])
    let carbsPercent=Number(input[2])
    let calories=Number(input[3])
    let waterPercent=Number(input[4])
    
    let fatGrams=((fatPercent/100)*calories)/9
    let proteinGrams=((proteinPercent/100)*calories)/4
    let carbsGrams=((carbsPercent/100)*calories)/4
    let foodWeight=fatGrams+proteinGrams+carbsGrams
    let caloriesPerGram=calories/foodWeight
    let water=(60/100)*6
    let rest=(100/100)-(60/100)
    let gramPerServing=rest*6
    console.log(gramPerServing.toFixed(1))
    



}
catDiet(["60",
"25",
"15",
"2500",
"60"])
