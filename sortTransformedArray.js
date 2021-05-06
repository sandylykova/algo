// 360. Sort Transformed Array

// Given a sorted integer array nums and three integers a, b and c, apply a quadratic function of the form f(x) = ax2 + bx + c to each element nums[i] in the array, and return the array in a sorted order.

// Input: nums = [-4,-2,2,4], a = 1, b = 3, c = 5
// Output: [3,9,15,33]

// Solution 1 brute force O(nlogn) time | O(1) space

var sortTransformedArray = function(nums, a, b, c) {
    let vals = [];
    for (let num of nums) {
        let val = a * num * num + b * num + c;
        vals.push(val);
    }
    return vals.sort((a, b) => a - b);
};

// Solution 2 O(n) time | O(1) space

var sortTransformedArray = function(nums, a, b, c) {
  let sortedValues = [];
  let i = 0, j = nums.length - 1;
  let index = a >= 0 ? nums.length - 1 : 0;
  while (i <= j) {
      let leftSide = calculate(a, b, c, nums[i]);
      let rightSide = calculate(a, b, c, nums[j]);
      if (a >= 0) {
          if (leftSide >= rightSide) {
              sortedValues[index] = leftSide;
              i++;
          } else {
              sortedValues[index] = rightSide;
              j--;
          }
          index--;
      } else {
          if (leftSide <= rightSide) {
              sortedValues[index] = leftSide;
              i++;
          } else {
              sortedValues[index] = rightSide;
              j--;
          }
          index++;
      }
  }
  return sortedValues;
};

function calculate(a, b, c, x) {
  return a * x * x + b * x + c;
}
