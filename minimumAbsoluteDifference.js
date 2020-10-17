// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows:

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr


// Example 1:

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

var minimumAbsDifference = function(arr) {
  const absMinPairs = [];
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    minDiff = Math.min(minDiff, arr[i] - arr[i - 1]);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] === minDiff) absMinPairs.push([arr[i - 1], arr[i]]);
  }
  return absMinPairs;
};
