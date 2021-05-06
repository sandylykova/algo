// 249. Group Shifted Strings

// We can shift a string by shifting each of its letters to its successive letter.

// For example, "abc" can be shifted to be "bcd".
// We can keep shifting the string to form a sequence.

// For example, we can keep shifting "abc" to form the sequence: "abc" -> "bcd" -> ... -> "xyz".
// Given an array of strings strings, group all strings[i] that belong to the same shifting sequence. You may return the answer in any order.

// Input: strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
// Output: [["acef"],["a","z"],["abc","bcd","xyz"],["az","ba"]]

// Solution 1 O(mn) time | O(n) space, where n is the length of the input array, m is the length of the longest string

var groupStrings = function(strings) {
  let ans = [];
  if (strings.length === 0) return ans;
  let map = new Map();
  for (let string of strings) {
      let key = getKey(string);
      if (!map.has(key)) {
          map.set(key, []);
      }
      map.get(key).push(string);
  }
  for (let [key, val] of map) {
      ans.push(val);
  }
  return ans;
};

function getKey(str) {
  let key = [];
  for (let i = 1; i < str.length; i++) {
      let prev = str[i - 1];
      let curr = str[i];
      let diff = curr.charCodeAt(0) - prev.charCodeAt(0);
      diff = diff < 0 ? diff + 26 : diff;
      key.push(diff);
  }
  return key.join('#');
}
