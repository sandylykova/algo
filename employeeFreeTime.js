// We are given a list schedule of employees, which represents the working time for each employee.

// Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

// Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

// (Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined).  Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

// Example 1:

// Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
// Output: [[3,4]]
// Explanation: There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [3, 4], [10, inf].
// We discard any intervals that contain inf as they aren't finite.

// Example 2:

// Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
// Output: [[5,6],[7,9]]

// Solution 1

var employeeFreeTime = function(schedule) {
  if (!schedule || schedule.length === 0) return schedule;
  let freeTime = [];
  let intervals = [];
  for (let i = 0; i < schedule.length; i++) {
      for (let j = 0; j < schedule[i].length; j++) {
          intervals.push(schedule[i][j]);
      }
  }
  intervals.sort((a, b) => a.start - b.start);
  let prev = intervals[0], start = prev.start, end = prev.end;
  for (let i = 1; i < intervals.length; i++) {
      let current = intervals[i];
      if (end >= current.start) {
          start = Math.min(start, current.start);
          end = Math.max(end, current.end);
      } else {
          freeTime.push(new Interval(end, current.start));
          start = current.start;
          end = current.end;
      }
  }

  return freeTime;
};
