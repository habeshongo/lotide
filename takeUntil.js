/* The function should take in two parameters:
 The array to work with
 The callback */

/* The function will return a "slice of the array with elements taken from the beginning."
 It should keep going until the callback/predicate returns a truthy value.*/

/* The callback should only be provided one value: The item in the array.
 takeUntil will keep collecting items from a provided array until the callback
 provided returns a truthy value.*/

const takeUntil = function (array, callback) {
  let output = [];

  for (let item of array) {
    if (!callback(item)) {
      output.push(item);
    } else {
      break;
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
