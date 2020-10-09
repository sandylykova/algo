// Find maximum depth of nested parenthesis in a string
// We are given a string having parenthesis like below
//      “( ((X)) (((Y))) )”
// We need to find the maximum depth of balanced parenthesis, like 4 in the above example. Since ‘Y’ is surrounded by 4 balanced parentheses.
// If parenthesis is unbalanced then return -1.
// Input : S = "( a(b) (c) (d(e(f)g)h) I (j(k)l)m)";
// Output : 4

// Input : S = "( p((q)) ((s)t) )";
// Output : 3
// maxDepth("(b) ((c) ()") => -1;

// Solution 1 - returns max depth

const maxDepth = (str) => {
  if (str.length === 0) return 0;
  let stack = [];
  let count = 0;
  let s = [];
  for (let i = 0; i < str.length; i++) {
    let curVal = str[i];
    if (curVal === '(') {
      stack.push(curVal);
      count++;
    } else if (curVal === ')') {
      if (stack.length === 0) return -1;
      stack.pop();
      count--;
    } else {
      if (s.length === 0) {
        s.push(count);
      } else if (count > s[s.length - 1]) {
        s.pop();
        s.push(count);
      }
    }
  }
  return stack.length > 0 ? -1 : s[s.length - 1];
};

// Solution 2 - returns string with max depth

const maxDepth2 = (str) => {
  if (str.length === 0) return 0;
  let stack = [];
  let count = 0;
  let s = [];
  for (let i = 0; i < str.length; i++) {
    let curVal = str[i];
    if (curVal === ' ') continue;
    if (curVal === '(') {
      stack.push(curVal);
      count++;
    } else if (curVal === ')') {
      if (stack.length === 0) return -1;
      stack.pop();
      count--;
    } else {
      if (s.length === 0) {
        s.push(curVal, count);
      } else if (count > s[s.length - 1]) {
        s.pop();
        s.pop();
        s.push(curVal, count);
      }
    }
  }
  return stack.length > 0 ? -1 : [s[s.length - 2]];
};

// maxDepth('( a(b) (c) (d(e(f)g)h) I (j(k)l)m)') => ['f']
