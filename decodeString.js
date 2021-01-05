// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Number could be more than 9!!!

// Solution 1
// Time Complexity: O(maxK⋅n), where maxK is the maximum value of k in the string s.
// Space Complexity: O(maxK⋅n).

var decodeString = function(s) {
  let stack = [];
  let str = '';
  let ret = '';
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === ']') {
        str = '';
        while (stack[stack.length - 1] !== '[') {
          let popped = stack.pop();
          str += popped;
        }
        stack.pop();
        let num = '';
        while (stack[stack.length - 1] >=0 && stack[stack.length - 1] <= 9) {
          num += stack.pop();
        }
        num = num.split("").reverse().join("");
        while (num > 0) {
            stack.push(str);
            num--;
        }
    } else {
      stack.push(char);
    }
  }
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].length > 1) {
      stack[i] = stack[i].split("").reverse().join("");
    }
    ret += stack[i];
  }
  return ret;
};

// Solution 2 O(maxK^countK * n) time, where maxKis the maximum value of k, countK is the count of nested k values and n is the maximum length of encoded string.

var decodeString = function(s) {
  let stack = [];
  for (let char of s) {
      if (char === ']') {
          let str = [];
          while (stack[stack.length - 1] !== '[') {
              str.push(stack.pop());
          }
          str = str.reverse().join('');
          stack.pop();
          let num = [];
          while (stack[stack.length - 1] >= 0 && stack[stack.length - 1] <= 9) {
              num.push(stack.pop());
          }
          num = num.reverse().join('');
          while (num > 0) {
              stack.push(str);
              num--;
          }
      } else {
          stack.push(char);
      }
  }
  return stack.join('');
};
