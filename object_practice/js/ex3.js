let contacts = [{
    'firstName': 'Akira',
    'lastName': 'Laine',
    'number': '0543236543',
    'likes': ['Pizza', 'Coding', 'Brownie Points'] 
},
{
    'firstName': 'Harry',
    'lastName': 'Potter',
    'number': '0994372684',
    'likes': ['Hogwarts', 'Magic', 'Hagrid'] 
},
{
    'firstName': 'Sherlock',
    'lastName': 'Holmes',
    'number': '0487345643',
    'likes': ['Intriguing Cases', 'Violin'] 
},
{
    'firstName': 'Kristian',
    'lastName': 'Vos',
    'number': 'unknown',
    'likes': ['JavaScript', 'Gaming', 'Foxes'] 
},
];

function lookUpProfile(firstname, prop){
    let result;
    for (let person of contacts){
        if (person.firstName == firstname)
            result = person[prop];
            break;
    }
    return result;
}

console.log(lookUpProfile('Akira', 'likes'));
