function myObject() {
    'use strict'
    const MATH_CONSTANTS = {
        E: 2.71828
    };
    // Only change code below this line
    const myObject2 = Object.freeze(MATH_CONSTANTS)
    
        myObject2.E ['new_data'];

        
        
    

    // Only change code above this line
    try {
        MATH_CONSTANTS.E = 23;
    } catch(error) {
        console.log(error.message);

    }
    return MATH_CONSTANTS.E;
}
const E = myObject();
console.log(E);
module.exports = myObject;