//const assertEqual = require('./assertEqual');

const head = function (arr) {
  if (arr.length > 0) {
    let a = arr[0]; //Create a placeholder for the first element of the array.
    return a;
  } else {
    return;
  }
};


module.exports = head;