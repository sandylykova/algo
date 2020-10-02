// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

var removeDuplicates1 = function(S) {
  let arr = S.split('');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i + 1]) {
          arr.splice(i, 2);
          i -= 2;
          if (i < 0) i = -1;
      }
  }
  return arr.join('');
};


var removeDuplicates2 = function(S) {
  let stack = [S[0]];
  for (let i = 1; i < S.length; i++) {
      if (S[i] === stack[stack.length - 1]) stack.pop();
      else {
          stack.push(S[i]);
      }
  }
  return stack.join('');
}
