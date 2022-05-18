/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/


let minValueCallback = function(array, cb) {
    let min = array[0]; // set minimum (smallest) number to the 0 index value
    for (let i = 0; i < array.length; i++) { // iterate through the array, up to the array length
        let ele = array[i]; // set value to current index of array
        if (ele < min) { // if the current element is smaller than the min variable (array[0])
            min = ele; // re-assign min variable to element
        }
     }
     if (cb === undefined) {   // if there is no cb
         return min;
    // if there is a cb
     } else {
        return cb(min); // pass the smallest num into the cb and return it
     }
};

console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
