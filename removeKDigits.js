// Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// Note:
// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

// Example 2:

// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

// Solution 1 O(n) time | O(n) space

var removeKdigits = function(num, k) {
  if (num.length === k) return '0';
  
  const stack = [];
  let removed = 0;
  for(let n of num) {
      while(stack.length && n < stack[stack.length-1] && removed < k) {
          stack.pop();
          removed += 1;
      }
      stack.push(n);
  }

  // remove all remaining large numbers
  while(removed < k) {
      stack.pop();
      removed += 1;
  }

  // remove all beginning zeroes
  while(stack.length && stack[0] === '0') {
      stack.shift();
  }

  return stack.length ? stack.join('') : '0';
};


