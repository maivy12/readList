function toOrdinalNumber(number){
    let stringNumber = String(number);
    let result = stringNumber;
    switch (stringNumber[stringNumber.length-1]){
        case '1':
            result += 'st';
            break;
        case '2':
            result += 'nd';
            break;
        case '3':
            result += 'rd';
            break;
        default:
            result += 'th';
    }
    return result;
}

console.log(toOrdinalNumber(1));
console.log(toOrdinalNumber(32));
console.log(toOrdinalNumber(403));
