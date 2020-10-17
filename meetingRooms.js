// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

// Input: [[0,30],[5,10],[15,20]]
// Output: false

// Solution 1 O(nlog(n)) time | O(1) space

var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
      if (intervals[i][1] > intervals[i + 1][0]) return false;
  }
  return true;
};

// Solution 2 O(n^2) time | O(1) space

var canAttendMeetings = function(intervals) {
  for (let i = 0; i < intervals.length; i++) {
      for (let j = i + 1; j < intervals.length; j++) {
          if (intervals[i][0] >= intervals[j][0] && intervals[i][0] < intervals[j][1]) return false;
          if (intervals[j][0] >= intervals[i][0] && intervals[j][0] < intervals[i][1]) return false;
      }
  }
  return true;
};
