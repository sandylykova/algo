// 528. Random Pick with Weight

// You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).

// We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() should return the integer proportional to its weight in the w array. For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).

// More formally, the probability of picking index i is w[i] / sum(w).

// Input
// ["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
// [[[1,3]],[],[],[],[],[]]
// Output
// [null,1,1,1,1,0]

// Explanation
// Solution solution = new Solution([1, 3]);
// solution.pickIndex(); // return 1. It's returning the second element (index = 1) that has probability of 3/4.
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 1
// solution.pickIndex(); // return 0. It's returning the first element (index = 0) that has probability of 1/4.

// Since this is a randomization problem, multiple answers are allowed so the following outputs can be considered correct :
// [null,1,1,1,1,0]
// [null,1,1,1,1,1]
// [null,1,1,1,0,0]
// [null,1,1,1,0,1]
// [null,1,0,1,0,0]
// ......
// and so on.

// Solution 1 O(n) time for the constructor function, O(n) time for the pickIndex function | 1 O(n) space for the constructor function, O(1) space for the pickIndex function

var Solution = function(w) {
  this.prefixSum = [];
  this.total = 0;
  for (let i = 0; i < w.length; i++) {
      this.total += w[i];
      this.prefixSum[i] = this.total;
  }
};

Solution.prototype.pickIndex = function() {
  let target = Math.random() * this.total;
  for (let i = 0; i < this.prefixSum.length; i++) {
      if (target < this.prefixSum[i]) {
          return i;
      }
  }
};

// Solution 2 O(n) time for the constructor function, O(log(n)) time for the pickIndex function | 1 O(n) space for the constructor function, O(1) space for the pickIndex function

var Solution = function(w) {
  this.prefixSum = [];
  this.total = 0;
  for (let i = 0; i < w.length; i++) {
      this.total += w[i];
      this.prefixSum[i] = this.total;
  }
};

Solution.prototype.pickIndex = function() {
  let target = Math.random() * this.total;
  let left = 0;
  let right = this.prefixSum.length - 1;
  while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (this.prefixSum[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return left;
};
