const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const assertObjectsEqual = require("./assertObjectsEqual");
const countLetters = require("./countLetters");
const countOnly = require("./countOnly");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");
const findkey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const flatten = require("./flatten");
const head = require("./head");
const letterPositions = require("./letterPositions");
const map = require("./map");
const middle = require("./middle");
const tail = require("./tail");
const takeUntil = require("./takeUntil");

const assertEqualTest = require("./assertEqual");
const assertArraysEqualTest = require("./assertArraysEqual");

//All functions are exported as an object.
module.exports = {
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findkey,
  findKeyByValue,
  flatten,
  head,
  letterPositions,
  map,
  middle,
  tail,
  takeUntil,
  assertEqualTest,
  assertArraysEqualTest,
};
