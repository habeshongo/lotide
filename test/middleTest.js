const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")


// console.log(middle([1]));
// console.log(middle([1, 2]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([2, 1, 4, 7, 9]));


assertArraysEqual(middle([1]), middle([1]) ); // => true
assertArraysEqual(middle([1, 2, 3]), middle([1, 2])); // => false
assertArraysEqual(middle(["1", "2", "3"]), middle(["1", "2", "3"])); // => true
assertArraysEqual(middle(["1", "2", "3"]), middle([2, 1, 4, 7, 9])); // => false
