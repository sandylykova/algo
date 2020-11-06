// Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

// Return the minimum number of steps to make t an anagram of s.

// An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

// Input: s = "bab", t = "aba"
// Output: 1
// Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

// Solution 1

var minSteps = function(s, t) {
  let mapFromS = new Map();
  let mapFromT = new Map();
  for (let char of s) {
      if (!mapFromS.has(char)) {
          mapFromS.set(char, 1);
      } else {
          let count = mapFromS.get(char);
          mapFromS.set(char, count + 1);
      }
  }
  for (let char of t) {
      if (!mapFromT.has(char)) {
          mapFromT.set(char, 1);
      } else {
          let count = mapFromT.get(char);
          mapFromT.set(char, count + 1);
      }
  }
  let sum = 0;
  let keys = Array.from(mapFromS.keys());

  for (let char of keys) {
      if (mapFromS.get(char) >= mapFromT.get(char)) {
          let count = mapFromS.get(char) - mapFromT.get(char);
          sum += count;
      } else if (!mapFromT.has(char)) {
          sum += mapFromS.get(char);
      }
  }
  return sum;
};

// Solution 2

var minSteps = function(s, t) {
  let mapFromS = new Map();
  for (let char of s) {
      if (!mapFromS.has(char)) {
          mapFromS.set(char, 1);
      } else {
          let count = mapFromS.get(char);
          mapFromS.set(char, count + 1);
      }
  }
  let sum = 0;
  for (let char of t) {
      if (mapFromS.has(char) && mapFromS.get(char) > 0) {
          let count = mapFromS.get(char);
          mapFromS.set(char, count - 1);
      } else {
          sum++;
      }
  }
  return sum;
};
