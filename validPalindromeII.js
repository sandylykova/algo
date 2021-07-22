// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.

// Solution 1 O(n) time | O(1) space

var validPalindrome = function(s) {
  function isPalindrom(str, i, j) {
      while (i < j) {
          if (str[i] !== str[j]) return false;
          i++;
          j--;
      }
      return true;
  }
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
      if (s[i] !== s[j]) {
          return isPalindrom(s, i + 1, j) || isPalindrom(s, i, j - 1);
      }
      i++;
      j--;
  }
  return true;
};
