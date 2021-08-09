// 678. Valid Parenthesis String

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

// Input: s = "(*))"
// Output: true

// Solution 1 O(n*m) time | O(n + m) space

var checkValidString = function(s) {
  let stack = [];
  let asterics = [];
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push([s[i], i]);
      } else if (s[i] === ')') {
          if (stack.length && stack[stack.length - 1][0] === '(') stack.pop();
          else if (asterics.length > 0) {
              stack.pop();
              asterics.pop();
          }
          else return false;
      } else {
          asterics.push(i);
      }
  }
  if (stack.length === 0) return true;
  else {
      if (asterics.length < stack.length) return false;
      for (let [char, idx] of stack) {
          let found = false;
          for (let i = 0; i < asterics.length; i++) {
              let val = asterics[i];
              if (val > 0 && val > idx) {
                  found = true;
                  asterics[i] = -val;
                  break;
              }
          }
          if (!found) return false;
      }
  }
  return true;
};

// Solution 2 O(n) time | O(1) space

var checkValidString = function(s) {
  let open = 0, close = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '*') open++;
      else open--;
      if (open < 0) return false;
  }
  if (open === 0) return true;
  for (let i = s.length - 1; i > -1; i--) {
      if (s[i] === ')' || s[i] === '*') close++;
      else close--;
      if (close < 0) return false;
  }
  return true;
};
