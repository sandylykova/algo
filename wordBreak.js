// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true

// Solution 1 O(n^3) time | O(n) space

var wordBreak = function(s, wordDict) {
    // O(m) space, m - the length of wordDict
    let dictionary = new Set(wordDict);
    let q = [0];
    // O(n) space, n - the length of s
    let visited = new Set();
    // O(n^3) time
    while (q.length > 0) {
        let idx = q.shift();
        if (idx === s.length) return true;
        if (!visited.has(idx)) {
            for (let i = idx; i < s.length; i++) {
                let substr = s.slice(idx, i + 1);
                if (dictionary.has(substr)) q.push(i + 1);
            }
            visited.add(idx);
        }
    }
    return false;
};
