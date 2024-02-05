function magazini(input){
    let stoka=input[0]
    switch(stoka){
        case "banan":
        case "chips":
        case "mlqko":
        case "hlqb":console.log("Rumen");break;
        case "kebapche":
        case "kiufte": console.log("Valdi");break;
        case "bilet":
        case "bdj karta":console.log("Garata");break;
        default: console.log("unknown");break;                    
    }
}
magazini(["kebapche"])