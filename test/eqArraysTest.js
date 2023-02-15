const eqArrays = require("../eqArrays")
const assertEqual = require("../assertEqual")


//if the arrays do not have the same length, return false
//if loop through array and test each idex of the array against the other
//if they don't match return false
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS