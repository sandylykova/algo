// 727. Minimum Window Subsequence

// Given strings S and T, find the minimum (contiguous) substring W of S, so that T is a subsequence of W.

// If there is no such window in S that covers all characters in T, return the empty string "". If there are multiple such minimum-length windows, return the one with the left-most starting index.

// S = "abcdebdde", T = "bde"
// Output: "bcde"
// Explanation:
// "bcde" is the answer because it occurs before "bdde" which has the same length.
// "deb" is not a smaller window because the elements of T in the window must occur in order.

// Solution 1 O(n + m) time | O(1) space - where n is the length of the S string, m is the length of the T string

var minWindow = function(S, T) {
  let i = 0;
  let j = 0;
  let minWindowStr = '';
  let min = Infinity;
  let end = 0;
  while (i < S.length) {
      if (S[i] === T[j]) {
          j++;
          if (j === T.length) {
              end = i;
              j--;
              while (j >= 0) {
                  if (S[i] === T[j]) j--;
                  i--;
              }
              i++;
              j = 0;
              if (end - i + 1 < min) {
                  min = end - i;
                  minWindowStr = S.slice(i, end + 1);
              }
          }
      }
      i++;
  }
  return minWindowStr;
};
