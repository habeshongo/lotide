const tail = require("../tail")
const assertEqual = require("../assertEqual")


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], "Lighthouse"); // => will always fail!
assertEqual(result[1], "Labs"); // => will always fail!
assertEqual(result.length, 2); // => will always fail!
