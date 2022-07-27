function switchCase(string){
    var result = '';
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) == string.charAt(i).toUpperCase()){
            result += string.charAt(i).toLowerCase();
        } else {
            result += string.charAt(i).toUpperCase();
        }
    }
    return result;
}

let a = 'The Quick Brown Fox';
console.log(switchCase(a));