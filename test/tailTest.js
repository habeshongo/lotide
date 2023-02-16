const tail = require("../tail")
const assertEqual = require("../assertEqual")

const assert = require('chai').assert;
describe("#tail", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 1);
  });
});



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result[0], "Lighthouse"); // => will always fail!
// assertEqual(result[1], "Labs"); // => will always fail!
// assertEqual(result.length, 2); // => will always fail!
