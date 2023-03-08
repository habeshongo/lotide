const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed✅: ${actual} === ${expected}.`);
  } else {
    console.log(`Assertion Failed🚫: ${actual} !== ${expected}.`);
  }
};
// The function should take in a sentence (as a string) and then return
//a count of each of the letters in that sentence.
//Need to return an object.
// For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

const countLetters = function (str) {
  let ans = {};
  for (const character of str) {
    //console.log(character);
    if (ans.hasOwnProperty(character)) {
      ans[character] += 1;
    } else {
      ans[character] = 1;
    }
  }
  return ans;
};

countLetters("LHL");
