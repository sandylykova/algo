// 1365. How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.

// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

// Solution 1 O(n^2) time | O(1) space

var smallerNumbersThanCurrent = function(nums) {
    let resultArray = [];
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) counter++;
        }
        resultArray.push(counter);
    }
    return resultArray;
};

// Solution 2 O(nlog(n)) time | O(n) space

var smallerNumbersThanCurrent = function(nums) {
  let copy = [];
  for (let i = 0; i < nums.length; i++) {
      copy[i] = nums[i];
  }
  let ans = [];
  let map = new Map();
  copy.sort((a, b) => a - b);
  for (let i = 0; i < copy.length; i++) {
      if (!map.has(copy[i])) map.set(copy[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
      ans[i] = map.get(nums[i]);
  }
  return ans;
};

// Solution 3
