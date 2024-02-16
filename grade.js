function formatGrade(grade){
 
     let ourGrade=grade
     if(ourGrade<3){
        console.log("Fail (2)");
     }
     else if(ourGrade>3 && ourGrade<3,5){
        console.log(`Poor (${ourGrade.toFixed(2)})`);
     }
     else if(ourGrade>3,5 && ourGrade<4,5){
        console.log(`Good(${ourGrade.toFixed(2)})`)
     }else if(ourGrade>4,5 && ourGrade<5,5){
        console.log(`Very good (${ourGrade.toFixed(2)})`);
     }else{
        console.log(`Excellent(${ourGrade.toFixed(2)})`);
     }

}
formatGrade(4.50);