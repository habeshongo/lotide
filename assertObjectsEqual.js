const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}.`);
  } else {
    console.log(`Assertion Failed🚫: ${actual} !== ${expected}.`);
  }
};

// function eqObjects which will take in two objects and returns
//true or false, based on a perfect match.

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    } else if (!Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else if (Array.isArray(object1[key])) {
      for (const e of object1[key]) {
        if (!object2[key].includes(e)) {
          return false;
        }
      }
    }
  }
  return true;
};

// Function Implementation
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `Assertion Passed✅: ${inspect(actual)} === ${inspect(expected)}.`
    );
  } else {
    console.log(
      `Assertion Failed🚫: ${inspect(actual)} !== ${inspect(expected)}.`
    );
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

assertObjectsEqual(shirtObject, anotherShirtObject);
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
