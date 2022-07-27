function shortenEmail(email){
    let result = '';
    let symbolIndex;
    for (let i = 0; i < email.length; i++){
        if (email[i] == '@') 
            symbolIndex = i;
    };
    for (let i = 0; i <= symbolIndex/2; i++)
        result += email[i];
    
    result += '...';
    for (let i = symbolIndex; i < email.length; i++)
        result += email[i];
    return result;
}

console.log(shortenEmail('robin_singh@example.com'));
console.log(shortenEmail('davidluiz@gmail.com'));
console.log(shortenEmail('mainguyenvy01@gmail.com'));