// 374. Guess Number Higher or Lower

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns 3 possible results:

// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

// Solution 1 O(log(n)) time | O(1) space

var guessNumber = function(n) {
  let left = 1;
  let right = n;
  while (left <= right) {
      let mid = left + Math.floor((right - left) / 2);
      if (guess(mid) === 0) return mid;
      else if (guess(mid) === -1) right = mid - 1;
      else left = mid + 1;
  }
};