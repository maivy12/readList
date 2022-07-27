function repeatString(string, times){
    let result = '';
    for (let i = 0; i < times; i++)
        result += string;
    return result;
}

console.log(repeatString('Ha!', 3));
console.log(repeatString('Vietnam', 4));
console.log(repeatString('Javascript', 1));