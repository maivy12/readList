function isPalindrome(string){
    let result = false;
    let reversedString = '';
    for (let i = string.length-1; i >= 0; i--)
        reversedString += string[i];
    if (reversedString == string)
        result = true;
    return result;
}

let s1 = 'mother';
let s2 = 'racecar';
console.log(`Is ${s1} a Palindrome string? ${isPalindrome(s1)}`);
console.log(`Is ${s2} a Palindrome string? ${isPalindrome(s2)}`);

