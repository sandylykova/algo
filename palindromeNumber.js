// 9. Palindrome Number

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Follow up: Could you solve it without converting the integer to a string?

// Input: x = 121
// Output: true

// Solution 1 O(n) time | O(n) space

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let string = String(x);
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
      if (string[left] !== string[right]) return false;
      left++;
      right--;
  }
  return true;
};

// Solution 2 O(log10(n)). We divided the input by 10 for every iteration | O(1) space

var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let reversed = 0;
  while (x > reversed) {
      reversed = (reversed * 10) + (x % 10);
      x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
};
