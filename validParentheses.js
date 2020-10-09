// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
      let val = s[i];
      if (val === '(' || val === '[' || val === '{') {
          stack.push(val);
      } else {
          if (stack.length === 0) return false;
          if (val === ')' && stack[stack.length - 1] === '(') stack.pop();
          if (val === ']' && stack[stack.length - 1] === '[') stack.pop();
          if (val === '}' && stack[stack.length - 1] === '{') stack.pop();
      }
  }
  return stack.length > 0 ? false : true;
};
