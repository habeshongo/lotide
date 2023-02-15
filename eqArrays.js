
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let ele1 = arr1[i];
    let ele2 = arr2[i];
    if (ele1 !== ele2) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays
