function lowerCase(string){
    let result = '';
    for (let i = 0; i < string.length; i++){
        if (string[i] == ' ')
            result += '-';
        else
            result += string[i].toLowerCase();
    }
    return result;
}

console.log(lowerCase("Robin Singh from USA."));
console.log(lowerCase("I lOVe YoU"));
console.log(lowerCase("king OF RaP"));
