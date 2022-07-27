let stringArray = ['one', 'one', 'one', 'two', 'two', 'three', 'one'];
let simpleArray = stringArray.filter((item, index) => {
    for (let j = index + 1; j < stringArray.length; j++){
        return item != stringArray[j];
    }
});
console.log(simpleArray);

