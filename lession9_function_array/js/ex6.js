function outlierNumber(array){
    if (array.length < 3)
        console.log('Độ dài mảng tối thiểu 3.');
    let even = [];
    let odd = [];
    let result;
    for (let item of array){
        if (item % 2 == 0)
            even.push(item);
        else 
            odd.push(item);
    }

    if (even.length == 1) result = even[0];
    else if(odd.length == 1) result = odd[0];
    else console.log('Mảng không hợp lệ.');

    return result;
}

console.log(outlierNumber([6, 1, 41, 13, 7, 21, 105, 37]));
