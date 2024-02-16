function repeatString(str, n) {
    let repeatedStr = '';
    for (let i = 0; i < n; i++) {
        repeatedStr += str;
    }
    return repeatedStr;
}


console.log(repeatString("abc", 3)); 
