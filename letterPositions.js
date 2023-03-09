//Function that takes in a string and returns all indices of letter positions in the string.
const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let key = sentence[i];
    if (key !== " ") {
      if (results.hasOwnProperty(key)) {
        let arr = results[key];
        arr.push(i);
        results[key] = arr;
      } else {
        results[key] = [i];
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));

/*
"Lighthouse in the house" should look like this below:

{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/
