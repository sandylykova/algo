// 384. Shuffle an Array

// Given an integer array nums, design an algorithm to randomly shuffle the array.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must be equally likely to be returned. Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Solution 1

var Solution = function(nums) {
  this.arr = nums;
};

Solution.prototype.reset = function() {
  return this.arr;
};

Solution.prototype.shuffle = function() {
  let clone = this.arr.slice();
  let len = clone.length;
  function swap(i, j, arr) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  for (let i = 0; i < len; i++) {
      swap(Math.floor(Math.random() * len), i, clone);
  }
  return clone;
};
