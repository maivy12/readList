function addHyphen(n){
    let result = '';
    for (let i = 0; i < n.length; i++){
        if (Number(n[i]) % 2 == 0 && Number(n[i+1]) % 2 == 0)
            result += n[i] + '-';
        else
            result += n[i];
    }
    return result;
}

let x = '025468';
console.log(addHyphen(x));