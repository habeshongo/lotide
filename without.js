/*Function that takes in a source array and an itemsToRemove arrays and returns 
only the items from the source array that are not in the itemsToRemove array.*/

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
