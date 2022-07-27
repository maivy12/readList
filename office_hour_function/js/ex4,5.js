function rightAngledTriangle(n){
    for (let i = 1; i <= n; i++){
        let string = '// ';
        for (let j = 1; j <= i; j++){
            string += '#';
        } 
        console.log(string);
    }
}

function leftAngledTriangle(n){
    let string = '';
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n-i; j++){
            string = '' + string;
        }
        string += '#';
        console.log('//' + string);
    }
}
leftAngledTriangle(6);
