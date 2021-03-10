// 202. Happy Number

// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// Solution 1 O(log(n)) time | O(log(n)) space

const isHappy = function(n) {
  let set = new Set();
  while (true) {
      if (set.has(n)) break;
      set.add(n);
      let sum = 0;
      while (n > 0) {
          sum += Math.pow(n % 10, 2);
          n = Math.floor(n / 10);
      }
      n = sum;
  }
  return n === 1;
};

// Solution 2 O(log(n)) time | O(log(n)) space

function getNext(n) {
  let sum = 0;
  while (n > 0) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
  }
  return sum;
}

var isHappy = function(n) {
  let fast = getNext(n);
  let slow = n;
  while (fast !== 1 && slow !== fast) {
      slow = getNext(slow);
      fast = getNext(getNext(fast));
  }
  return fast === 1;
};
