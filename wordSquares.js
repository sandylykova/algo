// 425. Word Squares

// Given a set of words (without duplicates), find all word squares you can build from them.

// A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

// For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.

// b a l l
// a r e a
// l e a d
// l a d y

// Note:
// There are at least 1 and at most 1000 words.
// All words will have the exact same length.
// Word length is at least 1 and at most 5.
// Each word contains only lowercase English alphabet a-z.

// Input:
// ["area","lead","wall","lady","ball"]

// Output:
// [
//   [ "wall",
//     "area",
//     "lead",
//     "lady"
//   ],
//   [ "ball",
//     "area",
//     "lead",
//     "lady"
//   ]
// ]

// Explanation:
// The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).

// Solution 1 O(N * 26^L), where N is the number of input words and L is the length of a single word | O(N * L), where N is the number of words and L is the length of a single word.

var wordSquares = function(words) {
  let result = [];
  if (words.length === 0) return result;
  let squareLen = words[0].length;
  let map = new Map();
  buildMapOfPrefixes(words, map);
  buildSquares(result, [], 0, squareLen, map);
  return result;
};

function buildSquares(result, curr, matched, total, map) {
  if (matched === total) {
      result.push(Array.from(curr));
      return;
  }
  let currPrefix = '';
  for (let i = 0; i < matched; i++) {
      currPrefix += curr[i][matched];
  }
  let candidates = map.get(currPrefix);
  if (!candidates) return;
  for (let candidate of candidates) {
      curr.push(candidate);
      buildSquares(result, curr, matched + 1, total, map);
      curr.pop();
  }
}

function buildMapOfPrefixes(words, map) {
  for (let word of words) {
      for (let j = -1; j < word.length; j++) {
          let currPrefix = word.substring(0, j + 1);
          if (!map.has(currPrefix)) map.set(currPrefix, new Set());
          map.get(currPrefix).add(word);
      }
  }
}
