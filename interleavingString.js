// 97. Interleaving String

// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

// An interleaving of two strings s and t is a configuration where they are divided into non-empty substrings such that:

// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
// Output: true

// Solution 1 O(2^(n + m)) time | O(n + m),  m is the length of s1 and n is the length of s2.

var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length > s3.length || s1.length + s2.length < s3.length) return false;
  return isInterleaveHelper(s1, s2, s3, 0, 0)
};

function isInterleaveHelper(s1, s2, s3, i, j) {
  let k = i + j;
  if (k === s3.length) return true;
  if (i < s1.length && s1[i] === s3[k]) {
      if (isInterleaveHelper(s1, s2, s3, i + 1, j)) return true;
  }
  if (j < s2.length && s2[j] === s3[k]) {
      if (isInterleaveHelper(s1, s2, s3, i, j + 1)) return true;
  }
  return false;
}
