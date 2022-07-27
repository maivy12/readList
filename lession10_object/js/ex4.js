function freeShipping(obj){
    let ship = 0;
    for (let item in obj){
        ship += obj[item];
    }
    return (ship >= 50);
}

console.log(freeShipping({"Shampoo": 5.99, "Rubber Ducks": 15.99}));
console.log(freeShipping({"Flatscreen TV": 399.99}));