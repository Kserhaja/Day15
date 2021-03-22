const milili = [10, 25, 4]; 
// Do NOT change this line
function myArr(mili) {
    'use strict';
    // only change code below this line
    milili.pop(4);
     milili.unshift(4);
     
     return mili;
    }
    
console.log(myArr(milili));
module.exports = myArr;