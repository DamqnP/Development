function sameThing(arr1,arr2){
for(let sum of arr1){
    if(arr2.includes(sum)){
        console.log(sum);
    }
}
}
sameThing(['Hey', 'hello',2,4,'Peter','e'],
['Petar',10,'hey',4,'hello','2'])
