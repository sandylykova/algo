// Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

// Solution 1 O(n) time | O(n) space

var majorityElement = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (hash[val] === undefined) {
            hash[val] = 1;
        } else hash[val]++;
    }
    let max = -Infinity;
    let maxNum;
    for (let i = 0; i < nums.length; i++) {
        let val = nums[i];
        if (hash[val] > max) {
            max = hash[val];
            maxNum = val;
        }
    }
    return maxNum;
};

// Solution 2 O(nlog(n)) time | O(1) space

var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  let mid = Math.floor(nums.length / 2);
  return nums[mid];
};
