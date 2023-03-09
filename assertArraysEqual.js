const eqArrays = require("./eqArrays");

//The eqArrays function takes in 2 arrays and returns true if the arrays are equal and false otherwise.
//assertArraysEqual prints an appropriate message after comparing the two arrays.
const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};

module.exports = assertArraysEqual;
