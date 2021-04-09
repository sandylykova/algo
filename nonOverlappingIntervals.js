// 435. Non-overlapping Intervals

// Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Input: [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.

// Solution 1 O(nlog(n)) time | O(1) space

var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let remove = 0;
  let nonOverlap = [];
  for (let i = 0; i < intervals.length; i++) {
      if (nonOverlap.length === 0 || nonOverlap[nonOverlap.length - 1][1] <= intervals[i][0]) {
          nonOverlap.push(intervals[i]);
      } else {
          nonOverlap[nonOverlap.length - 1][1] = Math.min(nonOverlap[nonOverlap.length - 1][1], intervals[i][1]);
          remove++;
      }
  }
  return remove;
};
