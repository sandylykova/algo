// 140. Word Break II

// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

// Note:

// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.

// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]

// Solution 1

var wordBreak = function(s, wordDict) {
  const memo = new Map();
  return wordBreakHelper(s, wordDict, memo);
};
const wordBreakHelper = (s, wordDict, memo) => {
  if (memo.has(s)) {
      return memo.get(s);
  }
  let result = [];
  if (s.length === 0) {
      result.push('');
      return result;
  }
  for (let word of wordDict) {
      if (s.startsWith(word)) {
          let subStr = s.slice(word.length);
          let subStrings = wordBreakHelper(subStr, wordDict, memo);
          for (let subString of subStrings) {
              let optionalSpace = subString === '' ? '' : ' ';
              result.push(word + optionalSpace + subString);
          }
      }
  }
  memo.set(s, result);
  return result;
};

// Solution 2

var wordBreak = function(s, wordDict) {
    let result = [];
    function recursive(curr, remaining) {
        if (remaining.length === 0) {
            let strCurr = curr.join(' ');
            result.push(strCurr);
            return;
        }
        for (let word of wordDict) {
            if (remaining.startsWith(word)) {
                let newCurr = curr.concat(word);
                let newRemaining = remaining.slice(word.length);
                recursive(newCurr, newRemaining);
            }
        }

    }
    recursive([], s);
    return result;
};
