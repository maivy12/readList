function sumOfMin(array){
    let sum = 0;
    array.forEach(element => {
        sum += Math.min(...element);
    });
    return sum;
}

let arr = [
    [2, 4, 6, 8],
    [7, 4, 1.1, 3],
    [5, 4, 9, 4, 5]
];
console.log(sumOfMin(arr));