// 239. Sliding Window Maximum

// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

// Return the max sliding window.

// Solution 1 brute force O(n * k) time | O(n - k + 1) space

var maxSlidingWindow = function(nums, k) {
  let max = [];
  for (let i = 0; i <= nums.length - k; i++) {
      let currMax = -Infinity;
      for (let j = i; j < i + k; j++) {
          currMax = Math.max(currMax, nums[j]);
      }
      max.push(currMax);
  }
  return max;
};
