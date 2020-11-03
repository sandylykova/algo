// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Solution 1 with sliding window and 2 pointers
// O(n) time | O(min(m, n)) space

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    if (s.length === 0) return maxLength;
    let set = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
        } else {
            set.delete(s[left]);
            left++;
        }
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};

// Solution 2 with sliding window optimized
// O(n) time | O(min(m, n)) space

var lengthOfLongestSubstring = function(s) {
  let maxLength = 0;
  if (s.length === 0) return maxLength;
  let set = new Set();
  let left = 0;
  let right = 0;
  while (right < s.length) {
      while (set.has(s[right])) {
          set.delete(s[left]);
          left++;
      }
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
  }
  return maxLength;
};
