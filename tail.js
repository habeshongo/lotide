const tail = function (arr) {
  let newArr = [];
  //An array with only one element or an empty array should yield an empty array for its tail
  if (arr.length === 1 || arr.length === 0) {
    return newArr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
};

module.exports = tail;
