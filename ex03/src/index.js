function printManyTimes(str) {
    "use strict";
    // only change code below this line
    const sentence = str + " is cool!";
    for (let i = 0; i < str.length; i += 5) {
        console.log(sentence);
    }
    return sentence;
    // only change code above this line
}
printManyTimes("Arena");
module.exports = printManyTimes;