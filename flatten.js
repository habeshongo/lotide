//Create a function flatten which will take in an array containing
//elements including nested arrays of elements, and return a "flattened"
//version of the array.

const flatten = function (arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (Array.isArray(ele)) {
      for (let j = 0; j < ele.length; j++) {
        ans.push(ele[j]);
      }
    } else {
      ans.push(ele);
    }
  }
  console.log(ans);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
