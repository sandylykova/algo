// 278. First Bad Version

// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Input: n = 5, bad = 4
// Output: 4
// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Solution 1 O(log(n)) time | O(1) space

var solution = function(isBadVersion) {
  return function(n) {
      let l = 1, r = n;
      while (l < r) {
          let m = l + Math.floor((r - l) / 2);
          if (!isBadVersion(m)) {
              l = m + 1;
          } else {
              r = m;
          }
      }
      return l;
  };
};
