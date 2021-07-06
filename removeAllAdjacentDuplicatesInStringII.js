// Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made.

// It is guaranteed that the answer is unique.

// removeDuplicates("deeedbbcccbdaa", 3) => "aa";

// Solution 1 O(n^2/k) time | O(n);

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

// Solution 2 O(n^2) time | O(n);

var removeDuplicates = function(s, k) {
    let stack = [1];
    let copy = s.split('');
    for (let i = 1; i < copy.length; i++) {
        if (copy[i - 1] !== copy[i]) {
            stack.push(1);
        } else {
            stack[stack.length - 1]++;
            if (stack[stack.length - 1] === k) {
                stack.pop();
                copy.splice(i - k + 1, k);
                i -= k;
            }
        }
    }
    return copy.join('');
};

// Solution 3 O(n) time | O(n) space

var removeDuplicates = function(s, k) {
  const stack = [];

  for(let char of s) {
      if(stack.length && stack[stack.length-1][0] === char) {
          stack[stack.length-1][1] += 1;
          if(stack[stack.length-1][1] === k) {
              stack.pop();
          }
      } else {
          stack.push([char, 1]);
      }
  }

  let res = '';

  for(let [char, count] of stack) {
      res += char.repeat(count);
  }

  return res;
};

// Solution 4 O(n) time | O(n) space

var removeDuplicates = function(s, k) {
    if (!s || k === 1 || !s.length) return '';
    let letters = [];
    let numbers = [];
    for (let i = 0; i < s.length; i++) {
        let current = s[i];
        if (letters.length && letters[letters.length - 1] === current) {
            numbers[numbers.length - 1] += 1;
        } else {
            numbers.push(1);
            letters.push(current);
        }
        if (numbers[numbers.length - 1] === k) {
            numbers.pop();
            letters.pop();
        }
    }
    let finalString = [];
    for (let i = 0; i < numbers.length; i++) {
        finalString.push(letters[i].repeat(numbers[i]));
    }
    return finalString.join('');
};
