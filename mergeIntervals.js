// Given a collection of intervals, merge all overlapping intervals.

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
  if (intervals.length === 1) return intervals;
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let returnedVals = [intervals[0]];
  let j = 0;
  for (let i = 1; i < intervals.length; i++) {
      let prev = returnedVals[j];
      let cur = intervals[i];
      if (cur[0] <= prev[1]) {
          returnedVals[j] = [prev[0], Math.max(cur[1], prev[1])];
      } else {
          returnedVals.push(cur);
          j++;
      }
  }
  return returnedVals;
};
