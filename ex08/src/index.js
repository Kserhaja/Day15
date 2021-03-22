
let num1 = 4;
let num2 = 6;
const sum = (num1, num2 = 1) => num1 + num2; {
    "use strict";
    
    
};
console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;