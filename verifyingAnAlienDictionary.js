// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

// Solution 1

var isAlienSorted = function(words, order) {
  let map = new Map();
  for (let i = 0; i < order.length; i++) {
      let letter = order[i];
      map.set(letter, i);
  }
  for (let i = 0; i < words.length - 1; i++) {
      let cur = words[i];
      let next = words[i + 1];
      if (map.get(cur[0]) > map.get(next[0])) return false;
      if (cur[0] === next[0]) {
          let p = 1;
          while (cur[p] === next[p] && cur[p] !== undefined && next[p] !== undefined) p++;
          if (next[p] === undefined && cur[p] !== undefined) return false;
          if (map.get(cur[p]) > map.get(next[p])) return false;
      }
  }
  return true;
};
