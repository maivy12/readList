function perfectNumber(n){
    let divisor = [];
    let sum = 0;
    let result;
    for (let i = 1; i < n; i++ ){
        if (n % i == 0){
            divisor.push(i);
            sum += i;
        }
    }
    console.log(...divisor);
    if (sum == n)
        result = true;
    else
        result = false;
    return result;
}
let number = 4;
console.log('Is', number, 'a perfect number?', perfectNumber(number));