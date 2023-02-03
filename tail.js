const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}.`);
  } else {
    console.log(`Assertion Failed🚫: ${actual} !== ${expected}.`);
  }
};

const tail = function (arr) {
  let newArr = [];
  if (arr.length > 1) {
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  } else {
    return undefined;
  }
};
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); // => will always fail!
assertEqual(result[1], "Labs"); // => will always fail!
assertEqual(result.length, 2); // => will always fail!
