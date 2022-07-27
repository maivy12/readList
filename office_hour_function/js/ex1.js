function pairElement(string1){
    let string2 = '';
    for (let i = 0; i < string1.length; i++){
        if (string1.charAt(i) == 'A') {
                string2 += 'T';
        } else if (string1.charAt(i) == 'T') {
            string2 += 'A';
        } else if (string1.charAt(i) == 'C') {
            string2 += 'G';
        } else {
            string2 += 'C';
        }   
    }
    return string2;
}

let dna1 = 'CGC';
console.log(pairElement(dna1));

