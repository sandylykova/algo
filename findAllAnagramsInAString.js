// 438. Find All Anagrams in a String

// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// Solution 1

var findAnagrams = function(s, p) {
    let len = p.length;
    if (len > s.length) return [];
    let ans = [];
    let sortedP = p.split('').sort().join('');
    for (let i = 0; i <= s.length - len; i++) {
        let curr = s.slice(i, i + len);
        let sortedCurr = curr.split('').sort().join('');
        if (sortedCurr === sortedP) {
            ans.push(i);
        }
    }
    return ans;
};

// Solution 2

var findAnagrams = function(s, p) {
  let result = [];
  if (!s || s.length < p.length) return result;
  let frequencyCounter = {};
  let unique = 0;
  for (let i = 0; i < p.length; i++) {
      if (frequencyCounter[p[i]] === undefined) unique++;
      frequencyCounter[p[i]] = frequencyCounter[p[i]] + 1 || 1;
  }
  let end = 0;
  let start = 0;
  while (end < s.length) {
      let curr = s[end];
      if (frequencyCounter[curr] !== undefined) {
          frequencyCounter[curr] = frequencyCounter[curr] - 1;
          if (frequencyCounter[curr] === 0) unique--;
      }
      end++;
      while (unique === 0) {
          let currFromStart = s[start];
          if (frequencyCounter[currFromStart] !== undefined) {
              frequencyCounter[currFromStart] = frequencyCounter[currFromStart] + 1;
              if (frequencyCounter[currFromStart] > 0) unique++;
          }
          if (end - start === p.length) result.push(start);
          start++;
      }
  }
  return result;
};

// Solution 3 (same as 2 but using Map)

var findAnagrams = function(s, p) {
    if (!s.length || !p.length || s.length < p.length) return [];
    let map = new Map();
    let unique = 0;
    for (let char of p) {
        if (!map.has(char)) {
            map.set(char, 1);
            unique += 1;
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    let result = [];
    let len = p.length;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) - 1);
            if (map.get(s[i]) === 0) unique--;
        }
        while (unique === 0) {
            if (i - start + 1 === len) {
                result.push(start);
            }
            if (map.has(s[start])) {
                map.set(s[start], map.get(s[start]) + 1);
                if (map.get(s[start]) > 0) unique++;
            }
            start++;
        }
    }
    return result;
};
