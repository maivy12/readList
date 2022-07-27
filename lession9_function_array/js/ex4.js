function average(n){
    let divisors = [];
    let result;
    let sum = 0;
    for(let i = 0; i <= n; i++){
        if(n % i == 0 && i % 2 == 0){
            divisors.push(i);
            sum += i;
        }
    }
    console.log(divisors);
    result = (sum / divisors.length).toFixed(2);
    return result;
}

let number = Number(prompt("Enter a number:"));
console.log(average(number));
