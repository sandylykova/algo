// 647. Palindromic Substrings

// Given a string, your task is to count how many palindromic substrings in this string.

// The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Solution 1 O(n^3) time | O(1) space

var countSubstrings = function(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
          if (isPal(i, j, s)) count++;
      }
  }
  return count;
};

function isPal(left, right, substr) {
  while (left < right) {
      if (substr[left] !== substr[right]) return false;
      left++;
      right--;
  }
  return true;
}
