const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let ele1 = arr1[i];
    let ele2 = arr2[i];
    //console.log(ele1, ele2);
    if (ele1 !== ele2) {
      //console.log(ele1, ele2);
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arr1, arr2) {
  console.log(eqArrays(arr1, arr2));
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false
