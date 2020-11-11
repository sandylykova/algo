// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

var topKFrequent = function(words, k) {
  words.sort();
  let map = new Map();
  let  max = 1;
  for (let word of words) {
      if (map.has(word)) {
          let count = map.get(word) + 1;
          map.set(word, count);
          max = Math.max(max, count);
      } else {
          map.set(word, 1);
      }
  }
  let results = [];
  while (k > 0) {
      for (let i = 0; i < words.length && k > 0; i++) {
          if (map.get(words[i]) === max) {
              map.delete(words[i]);
              results.push(words[i]);
              k--;
          }
      }
      max--;
  }
  return results;
};
