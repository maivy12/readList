function getBudgets(list){
    let total = 0;
    for (let person of list){
        total += person.budget;
    }
    return total;
}

const result = getBudgets([
    { name: "John", age: 21, budget: 23000 }, 
     { name: "Steve", age: 32, budget: 40000 }, 
     { name: "Martin", age: 16, budget: 2700 }
    ])

console.log(result);

const arr = [
    { name: "John", age: 21, budget: 23000 }, 
     { name: "Steve", age: 32, budget: 40000 }, 
     { name: "Martin", age: 16, budget: 2700 }
    ]
const arr2 = arr.filter((person) => person.name !== 'Steve');
console.log(arr2);