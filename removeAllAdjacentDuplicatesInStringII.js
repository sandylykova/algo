// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

// removeDuplicates("deeedbbcccbdaa", 3) => "aa";

var removeDuplicates = function(s, k) {
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    let counter = 0;
      if (arr[i] === arr[i + 1]) {
          for (let j = i; j < k + i; j++) {
              if (arr[i] === arr[j]) counter++;
          }
          if (counter === k) {
              arr.splice(i, k);
              i-=k;
              if (i < 0) i = -1;
          }
      }
  }
  return arr.join('');
};
