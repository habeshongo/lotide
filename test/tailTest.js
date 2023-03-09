const tail = require("../tail");
const assertEqual = require("../assertEqual");

const assert = require("chai").assert;
describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse"); // => will always fail!
// assertEqual(result[1], "Labs"); // => will always fail!
// assertEqual(result.length, 2); // => will always fail!

//Deep equal checks for every element of the array. Strict equal cannot do an equality check of an array. Deepequal can.
