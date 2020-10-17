// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Solution 1 O(nlog(n)) time | O(n) space

var minMeetingRooms = function(intervals) {
  let max = 0;
  let start = [];
  let end = [];
  for (let i = 0; i < intervals.length; i++) {
      start.push(intervals[i][0]);
      end.push(intervals[i][1]);
  }
  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let rooms = 0;
  while (p1 < start.length) {
      if (start[p1] < end[p2]) {
          rooms++;
          p1++;
      } else {
          rooms--;
          p2++;
      }
      if (max < rooms) {
          max = rooms;
      }
  }
  return max;
};
