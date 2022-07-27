function fizzBuzz(){
    let stringResult = '';
    for (let i = 1; i <= 15; i++){
        if (i % 3 == 0 && i % 5 == 0){
            stringResult += 'FizzBuzz';
        } else if (i % 5 == 0){
            stringResult += 'Buzz';
        } else if (i % 3 == 0){
            stringResult += 'Fizz';
        }
    }
    return stringResult;
}
console.log(fizzBuzz());