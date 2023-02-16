const head = require('./head')
const tail = require('./tail')
const middle = require('./middle')
const eqArrays = require('./eqArrays')
const assertEqualTest = require('./assertEqual')
const assertArraysEqualTest = require('./assertArraysEqual')



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  assertEqualTest: assertEqualTest,
  assertArraysEqualTest: assertArraysEqualTest
}