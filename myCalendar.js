// 729. My Calendar I

// Implement a MyCalendar class to store your events. A new event can be added if adding the event will not cause a double booking.

// Your class will have the method, book(int start, int end). Formally, this represents a booking on the half open interval [start, end), the range of real numbers x such that start <= x < end.

// A double booking happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)

// For each call to the method MyCalendar.book, return true if the event can be added to the calendar successfully without causing a double booking. Otherwise, return false and do not add the event to the calendar.

// Your class will be called like this: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

// MyCalendar();
// MyCalendar.book(10, 20); // returns true
// MyCalendar.book(15, 25); // returns false
// MyCalendar.book(20, 30); // returns true
// Explanation:
// The first event can be booked.  The second can't because time 15 is already booked by another event.
// The third event can be booked, as the first event takes every time less than 20, but not including 20.

// Solution 1 O(n^2) time | O(n) space

var MyCalendar = function() {
  this.booking = [];
};

MyCalendar.prototype.book = function(start, end) {
  for (let interval of this.booking) {
      if (interval[1] > start && interval[0] < end) {
          return false;
      }
  }
  this.booking.push([start, end]);
  return true;
};

// Solution 2 O(log(n)) time | O(n) space

var MyCalendar = function() {
  this.root = null;
};

MyCalendar.prototype.book = function(start, end) {
  if (this.root === null) {
      return this.root = new Node(start, end);
  } else {
      function traverse(start, end, root) {
          if (root.start >= end) {
              if (root.left) {
                  return traverse(start, end, root.left);
              } else {
                  root.left = new Node(start, end);
                  return true;
              }
          } else if (root.end <= start) {
              if (root.right) {
                  return traverse(start, end, root.right);
              } else {
                  root.right = new Node(start, end);
                  return true;
              }
          } else {
              return false;
          }
      }
      return traverse(start, end, this.root);
  }
};
