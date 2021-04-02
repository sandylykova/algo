// 1060. Missing Element in Sorted Array

// Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.

// Input: nums = [4,7,9,10], k = 1
// Output: 5
// Explanation: The first missing number is 5.

// Solution 1 O(n) time | O(n) space

var missingElement = function(nums, k) {
    let set  = new Set();
    for (let num of nums){
        set.add(num);
    }
    let found = 0;
    for (let i = 0;i < nums.length;i++){
        let next = nums[i] + 1;
            while (!set.has(next) && found < k){
                set.add(next);
                next++;
                found++;
            }
        if (found === k) return next - 1;
    }
};
