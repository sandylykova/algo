// Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

// Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"

// Solution 1

var minWindow = function(s, t) {
  let min = Infinity;
  let minSubstr = s;
  let left = 0;
  let right = 0;
  let map = new Map();
  for (let char of t) {
      map.set(char, map.get(char) + 1 || 1);
  }
  let unique = map.size;
  while (right < s.length) {
      let curr = s[right];
      right++;
      if (map.has(curr)) {
          let count = map.get(curr) - 1;
          map.set(curr, count);
          if (count === 0) {
              unique--;
          }
          while (unique === 0) {
              let currLeft = s[left];
              let currSubstring = s.slice(left, right);
              if (currSubstring.length < min) {
                  min = currSubstring.length;
                  minSubstr = currSubstring;
              }
              if (map.has(currLeft)) {
                  let count = map.get(currLeft) + 1;
                  map.set(currLeft, count);
                  if (count > 0) {
                  unique++;
                  }
              }
              left++;
          }
      }
  }
  return min === Infinity ? '' : minSubstr;
};
