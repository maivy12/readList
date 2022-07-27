function countDivisor(n){
    let divisor = [];
    for (let i = 1; i <= n; i++ ){
        if (n % i == 0)
            divisor.push(i);
    }
    console.log(...divisor);
    return divisor.length;
}

console.log(countDivisor(12));
