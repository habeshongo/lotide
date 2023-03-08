// const eqArrays = function (arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let ele1 = arr1[i];
//     let ele2 = arr2[i];
//     //console.log(ele1, ele2);
//     if (ele1 !== ele2) {
//       //console.log(ele1, ele2);
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function (arr1, arr2) {
//   console.log(eqArrays(arr1, arr2));
// };

const without = function (arr1, arr2) {
  let ans = [];
  for (let i = 0; i < arr1.length; i++) {
    let ele = arr1[i];
    if (!arr2.includes(ele)) {
      ans.push(ele);
    }
  }
  return ans;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

without([1, 2, 3, "cat"], [1]);
without(["1", "2", "3", {}, []], [1, 2, "3"]);
