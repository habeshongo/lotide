const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  //let str = sentence.split(" ").join(""); // .split converts the string to an array and .join puts it back together to a string.

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
"Lighthouse in the house" should lloke like this below:

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
