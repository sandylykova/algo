// Given a string, sort it in decreasing order based on the frequency of characters.

// Input:
// "tree"

// Output:
// "eert"

// Solution 1

var frequencySort = function(s) {
  if (s.length === 0) return s;
  let map = new Map();
  for (let char of s) {
      map.set(char, map.get(char) + 1 || 1);
  }
  let returnedValue = [];
  let bucket = new Array(s.length + 1);
  let keys = Array.from(map.keys());
  for (let i = 0; i < keys.length; i++) {
      let val = map.get(keys[i]);
      if (bucket[val] === undefined) bucket[val] = [];
      bucket[val].push(keys[i]);
  }
  for (let i = bucket.length - 1; i >= 0; i--) {
      let curr = bucket[i];
      if (curr) {
          for (let j = 0; j < curr.length; j++) {
              returnedValue.push(curr[j].repeat(i));
          }
      }
  }
  return returnedValue.join('');
};
