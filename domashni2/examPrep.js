function examPrep(input){
    let list=input.shift().split('!');
    let command = input.shift();

    while(command!= "Go Shopping!"){
        let [action, firstItem, secondItem]=command.split(' ');
        console.log(action);
        command=input.shift();
    }

}
examPrep(["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping"]);