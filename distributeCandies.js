// Leetcode March Challenge
// Distribute Candies

// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Input: candyType = [1,1,2,2,3,3]
// Output: 3

// Solution 1 O(n) time | O(min(a, n)) - where a is the set of unique numbers in the input array

var distributeCandies = function(candyType) {
  let allowedAmount = candyType.length / 2;
  let set = new Set();
  for (let candy of candyType) {
      set.add(candy);
  }
  return set.size >= allowedAmount ? allowedAmount : set.size;
};
