function concatenate(array){
    let string = '';
    for (let i = 0; i < array.length; i++){
        string += array[i];
    }
    return string;
}

let name = ['M','a','i',' ','V','y'];
console.log(concatenate(name));