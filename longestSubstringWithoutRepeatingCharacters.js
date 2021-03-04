// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Solution 1 with sliding window and 2 pointers
// O(n) time | O(min(m, n)) space

// Solution 1 O(n) time | O(n) space

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

// Solution 3
// returns longest substring itself

function longestSubstringWithoutDuplication(string) {
    let set = new Set();
      let fast = 0;
      let slow = 0;
      let longest = '';
      while (fast < string.length) {
          if (!set.has(string[fast])) {
              set.add(string[fast]);
              fast++;
              let curr = string.slice(slow, fast);
              if (curr.length > longest.length) {
                  longest = curr;
              }
          } else {
              set.delete(string[slow]);
              slow++;
          }
      }
      return longest;
  }

  // Solution 4 O(n) time | O(min(a, n)) - where a is the set of unique characters in the input string

  function longestSubstringWithoutDuplication(string) {
      let hash = {};
      let startIdx = 0;
      let longest = [0, 1];
      for (let i = 0; i < string.length; i++) {
          if (hash[string[i]] !== undefined) startIdx = Math.max(hash[string[i]] + 1, startIdx);
          hash[string[i]] = i;
          if (longest[1] - longest[0] < i + 1 - startIdx) {
              longest = [startIdx, i + 1];
          }
      }
      return string.slice(longest[0], longest[1]);
  }
