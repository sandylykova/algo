// 763. Partition Labels

// A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

// Solution O(n) time | O(n) space

var partitionLabels = function(S) {
  let lastIndex = {};
  for (let i = 0; i < S.length; i++) {
      lastIndex[S[i]] = i + 1;
  }
  let result = [];
  let max;
  for (let i = 0; i < S.length; i++) {
      max = lastIndex[S[i]];
      while (max > i) {
          max = Math.max(max, lastIndex[S[i]]);
          i++;
      }
      i--;
      result.push(max);
  }
  let ans = [];
  for (let i = 0; i < result.length; i++) {
      let val = result[i];
      ans.length > 0 ? ans.push(val - result[i - 1]) : ans.push(val);
  }
  return ans;
};
