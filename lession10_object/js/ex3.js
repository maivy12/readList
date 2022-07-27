function keysAndValues(object){
    let keys = [];
    let values = [];
    
    for (let key in object){
        keys.push(key);
        values.push(object[key]);
    }
    
    return [keys, values];
}

const object1 = { a: 1, b: 2, c: 3 };
let data1 = keysAndValues(object1);
console.log(data1);