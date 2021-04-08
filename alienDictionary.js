// 269. Alien Dictionary

// There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.

// You are given a list of strings words from the alien language's dictionary, where the strings in words are sorted lexicographically by the rules of this new language.

// Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return "". If there are multiple solutions, return any of them.

// A string s is lexicographically smaller than a string t if at the first letter where they differ, the letter in s comes before the letter in t in the alien language. If the first min(s.length, t.length) letters are the same, then s is smaller if and only if s.length < t.length.

// Input: words = ["wrt","wrf","er","ett","rftt"]
// Output: "wertf"

// Solution 1

var alienOrder = function(words) {
  let indegrees = {};
  let preq = {};
  for (let word of words) {
      for (let i = 0; i < word.length; i++) {
          indegrees[word[i]] = 0;
      }
  }

  for (let i = 0; i < words.length - 1; i++) {
      let curr = words[i];
      let next = words[i + 1];
      let j = 0;

      while (j < curr.length && j < next.length) {
          if (curr[j] !== next[j]) {
              if (preq[curr[j]] === undefined) preq[curr[j]] = [];
              preq[curr[j]].push(next[j]);
              break;
           }
          j++;
      }
      if (j === next.length && j < curr.length) return '';
  }
  for (let key in preq) {
      let vals = preq[key];
      if (vals) {
          for (let i = 0; i < vals.length; i++) {
              indegrees[vals[i]]++;
          }
      }
  }
  let q = [];
  for (let key in indegrees) {
      if (indegrees[key] === 0) q.push(key);
  }
  let result = [];
  while (q.length > 0) {
      let curr = q.shift();
      let prereq = preq[curr];
      if (prereq) {
          for (let i = 0; i < prereq.length; i++) {
              let currPrereq = prereq[i];
              indegrees[currPrereq]--;
              if (indegrees[currPrereq] === 0) q.push(currPrereq);
          }
      }
      result.push(curr);
  }
  if (result.length !== Object.keys(indegrees).length) return '';
  let vals = result.join('');
  return vals;
};
