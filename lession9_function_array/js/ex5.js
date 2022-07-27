function type(arr){
    let typeArray = [];
    for (let i = 0; i < arr.length; i++){
        typeArray.push(typeof arr[i]);
    } 
    return typeArray;
}
let array = ['Porsche', 1990, true, 6000000];
console.log(type(array));
    