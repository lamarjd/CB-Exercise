/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

// iterate the array
// pass each element of array through the cb
// return a new array with the results of the passed in element throught the cb, if true

let myFilter = function(array, cb) {
     let newArr = []; // create new array
     for (let i = 0; i < array.length; i++) { // iterate the array, up to array's length
         let ele = array[i]; // set a value to the current index of the array
         if (cb(ele) === true) { // pass the element through the cb. if result of the cb is true
             newArr.push(ele); // push the result into the new array
         }
     }
     return newArr; // return new array
};

// let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
//     return n % 2 === 0;
// });
// console.log(result1);       // [ 4, 8 ]

// let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
//     return s.length > 3;
// });
// console.log(result2);      // ['choose', 'words', 'only']




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;
