// 820. Short Encoding of Words

// A valid encoding of an array of words is any reference string s and array of indices indices such that:

// words.length == indices.length
// The reference string s ends with the '#' character.
// For each index indices[i], the substring of s starting from indices[i] and up to (but not including) the next '#' character is equal to words[i].
// Given an array of words, return the length of the shortest reference string s possible of any valid encoding of words.

// Input: words = ["time", "me", "bell"]
// Output: 10
// Explanation: A valid encoding would be s = "time#bell#" and indices = [0, 2, 5].
// words[0] = "time", the substring of s starting from indices[0] = 0 to the next '#' is underlined in "time#bell#"
// words[1] = "me", the substring of s starting from indices[1] = 2 to the next '#' is underlined in "time#bell#"
// words[2] = "bell", the substring of s starting from indices[2] = 5 to the next '#' is underlined in "time#bell#"

// Solution 1 O(w^2) time | O(n) space - where w is the length of the longest word, n is the number of words

var minimumLengthEncoding = function(W) {
  let set = new Set(W);
  for (let word of W) {
      if (set.has(word)) {
          for (let i = 1; i < word.length; i++) {
              set.delete(word.slice(i));
          }
      }
  }
  return Array.from(set).join('#').length + 1;
};
