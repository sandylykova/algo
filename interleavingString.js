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
  return isInterleaveHelper(s1, s2, s3, 0, 0);
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

// Solution 2 O(nm) time | O(nm) space

var isInterleave = function(s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
      return false;
  }
  let memo = {};
  return check(s1, s2, s3, s1.length, s2.length, s3.length, 0, 0, 0, memo);
};

function check(s1, s2, s3, len1, len2, len3, p1, p2, p3, memo) {
  let key = String(p1) + '*' + String(p2) + '*' + String(p3);
  if (memo[key] !== undefined) return memo[key];
  if (p3 === len3) {
      if (len1 === p1 && len2 === p2) return true;
      else return false;
  }
  if (len1 === p1) {
      if (s2[p2] === s3[p3]) {
          memo[key] = check(s1, s2, s3, len1, len2, len3, p1, p2 + 1, p3 + 1, memo);
      } else {
          memo[key] = false;
      }
  }
  if (len2 === p2) {
      if (s1[p1] === s3[p3]) {
          memo[key] = check(s1, s2, s3, len1, len2, len3, p1 + 1, p2, p3 + 1, memo);
      } else {
          memo[key] = false;
      }
  }
  let one = false, two = false;
  if (s1[p1] === s3[p3]) {
      one = check(s1, s2, s3, len1, len2, len3, p1 + 1, p2, p3 + 1, memo);
  }
  if (s2[p2] === s3[p3]) {
      two = check(s1, s2, s3, len1, len2, len3, p1, p2 + 1, p3 + 1, memo);
  }
  return memo[key] = one || two;
}

// Solution 3 O(2^(n + m)) time | O(n + m),  m is the length of s1 and n is the length of s2.

function interweavingStrings(one, two, three) {
    let ans = false;
      function recursive(str1, str2, str3, p1, p2, p3) {
          if (!ans) {
              if (p1 === str1.length && p2 === str2.length) {
                  if (p3 === str3.length) {
                      ans = true;
                  }
                  return;
              }
              if (p1 < str1.length && p3 < str3.length && str1[p1] === str3[p3]) {
                  recursive(str1, str2, str3, p1 + 1, p2, p3 + 1);
              }
              if (p2 < str2.length && p3 < str3.length && str2[p2] === str3[p3]) {
                  recursive(str1, str2, str3, p1, p2 + 1, p3 + 1);
              }
          }
      }
      recursive(one, two, three, 0, 0, 0);
      return ans;
  }
