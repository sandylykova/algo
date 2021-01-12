// Given a string s of '(' , ')' and lowercase English characters.

// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

// Formally, a parentheses string is valid if and only if:

// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.


// Example 1:

// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

// Solution 1 O(n^2) time | O(n) space;
var minRemoveToMakeValid = function(s) {
  let stack = [];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val !== '(' && val !== ')') continue;
    if (val === '(') stack.push(i);
    else {
      if (stack.length === 0) {
        arr.splice(i, 1);
        i--;
      } else {
        stack.pop();
      }
    }
  }
  while (stack.length > 0) {
    let last = stack[stack.length - 1];
    arr.splice(last, 1);
    stack.pop();
  }
  return arr.join('');
};

// Solution 2 O(n) time | O(n) space

var minRemoveToMakeValid = function(s) {
  let stack = [];
  let indexToRemove = new Set();
  for (let i = 0; i < s.length; i++) {
      let val = s[i];
      if (val !== '(' && val !== ')') continue;
      if (val === '(') stack.push(i);
      else {
          if (stack.length === 0) {
              indexToRemove.add(i);
          } else {
              stack.pop();
          }
      }
  }
  while (stack.length > 0) {
      indexToRemove.add(stack.pop());
  }
  let arr = [];
  for (let i = 0; i < s.length; i++) {
      if (!indexToRemove.has(i)) {
          arr.push(s[i]);
      }
  }
  return arr.join('');
};
