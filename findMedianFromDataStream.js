// 295. Find Median from Data Stream

// Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

// For example,
// [2,3,4], the median is 3

// [2,3], the median is (2 + 3) / 2 = 2.5

// Design a data structure that supports the following two operations:

// void addNum(int num) - Add a integer number from the data stream to the data structure.
// double findMedian() - Return the median of all elements so far.

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2

// Solution 1

var MedianFinder = function() {
  this.data = [];
};

MedianFinder.prototype.addNum = function(num) {
  const binarySearch = (n) => {
      let start = 0;
      let end = this.data.length - 1;
      while (start <= end) {
          let mid = Math.floor((start + end) / 2);
          if (this.data[mid] > n) {
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      }
      this.data.splice(start, 0, n);
  };
  if (this.data.length === 0) this.data.push(num);
  else binarySearch(num);
};

MedianFinder.prototype.findMedian = function() {
  if (this.data.length % 2 === 1) {
      let mid = Math.floor(this.data.length / 2);
      return this.data[mid];
  } else {
      let mid = Math.floor(this.data.length / 2);
      let nextMid = mid - 1;
      return (this.data[mid] + this.data[nextMid]) / 2;
  }
};
