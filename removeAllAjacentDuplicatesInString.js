// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made.  It is guaranteed the answer is unique.

var removeDuplicates = function(S) {
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
