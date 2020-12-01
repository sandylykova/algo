// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Solution 1

var convert = function(s, numRows) {
  let len = s.length;
  if (numRows < 2 || len < numRows) return s;
  let counter = 0;
  let reverse = false;
  let ans = new Array(numRows).fill('');
  for (let i = 0; i < len; i++) {
      ans[counter] += s[i];
      reverse ? counter-- : counter++;
      if (counter === 0 || counter === numRows - 1) {
          reverse = !reverse;
      }
  }
  return ans.join('');
};
