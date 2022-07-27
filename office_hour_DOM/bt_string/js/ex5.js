function countDuplicateChar(string){
    let characters = {};
    for (let i = 0; i < string.length; i++){
        if (characters[string[i]]){
            characters[string[i]]++;
        }
        else {
            characters[string[i]] = 1;
        }
    }
    return characters;
}

console.log(countDuplicateChar('adsjfdsfsfjsdjfhacabcsbajda'));
