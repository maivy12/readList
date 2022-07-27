function min(array){
    let min = array[0];
    for (let item of array){
        if (item < min)
        min = item;
    }
    return min;
}

function max(array){
    let max = array[0];
    for (let item of array){
        if (item > max)
        max = item;
    }
    return max;
}

let arr = [5, 4, 9, 4, 5, 1, 5, 2, 1, 5];
console.log(arr);
console.log(`Min of array: ${min(arr)}`);
console.log(`Max of array: ${max(arr)}`);
