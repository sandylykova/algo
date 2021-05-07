// 696. Count Binary Substrings

// Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

// Substrings that occur multiple times are counted the number of times they occur.

// Input: s = "00110011"
// Output: 6
// Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
// Notice that some of these substrings repeat and are counted the number of times they occur.
// Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

// Solution 1 O(n) time | O(n) space

var countBinarySubstrings = function(s) {
    if (!s || !s.length) return 0;
    let groups = [1];
    for (let i = 1; i < s.length; i++) {
        let prev = s[i - 1];
        let curr = s[i];
        if (prev === curr) {
            groups[groups.length - 1]++;
        } else {
            groups.push(1);
        }
    }
    let ans = 0;
    for (let i = 1; i < groups.length; i++) {
        let prev = groups[i - 1];
        let curr = groups[i];
        ans += Math.min(prev, curr);
    }
    return ans;
};

// Solution 2 O(n) time | O(1) space

var countBinarySubstrings = function(s) {
  if (!s || !s.length) return 0;
  let ans = 0;
  let prev = 0;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
      if (s[i - 1] === s[i]) {
          curr++;
      } else {
          ans += Math.min(prev, curr);
          prev = curr;
          curr = 1;
      }
  }
  return ans + Math.min(prev, curr);
};
