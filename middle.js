// Implement middle which will take in an array and
// return the middle-most element(s) of the given array.

// For arrays with one or two elements, there is no
// middle. Return an empty array.

// For arrays with odd number of elements, an array
// containing a single middle element should be returned.

// For arrays with an even number of elements, an array
// containing the two elements in the middle should be returned


const middle = function (arr) {
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    let midIndex = Math.floor(arr.length / 2);
    return [arr[midIndex]];
  } else {
    //[1,2,3,4]
    let midIndex = Math.floor(arr.length / 2);
    return [arr[midIndex - 1], arr[midIndex]];
  }
};




module.exports = middle