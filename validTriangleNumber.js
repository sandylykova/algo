// Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

// Input: [2,2,3,4]
// Output: 3
// Explanation:
// Valid combinations are:
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3

// Solution 1 O(n^3) time | O(1) space

const triangleNumber = function(nums) {
  let count = 0;
 for (let i = 0; i < nums.length - 2; i++) {
     for (let j = i + 1; j < nums.length - 1; j++) {
         for (let k = j + 1; k < nums.length; k++) {
             if (nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i]) count++;
         }
     }
 }
  return count;
};

// Solution 2 O(n^2) time | O(1) space

const triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let k = i + 2;
        for (let j = i + 1; j < nums.length - 1 && nums[i] !== 0; j++) {
            while (k < nums.length && nums[k] < nums[i] + nums[j]) {
                k++;
            }
            count += k - j - 1;
        }
    }
    return count;
};
