let name = "Mai Vy";
let age = 21;
console.log(`Tôi tên là ${name}. Tôi ${age} tuổi.`)

let price = 500000;
let discount = 10;
let total = price - price * (discount/100);
console.log(total);
if (total > 25)
    console.log("Free shipping!!");

let height = 30;
let width = 20;
let p = 2*(height + width);
console.log(p);
let area = height * width;
console.log(area);

var numbers = {
    number1:20, 
    number2:30,
};
function add(a, b)
{
    return a + b;
}
console.log(add(numbers.number1, numbers.number2));
