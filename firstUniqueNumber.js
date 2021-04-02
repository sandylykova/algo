// 1429. First Unique Number

// You have a queue of integers, you need to retrieve the first unique integer in the queue.

// Implement the FirstUnique class:

// FirstUnique(int[] nums) Initializes the object with the numbers in the queue.
// int showFirstUnique() returns the value of the first unique integer of the queue, and returns -1 if there is no such integer.
// void add(int value) insert value to the queue.

// Input:
// ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
// [[[2,3,5]],[],[5],[],[2],[],[3],[]]
// Output:
// [null,2,null,2,null,3,null,-1]

// Explanation:
// FirstUnique firstUnique = new FirstUnique([2,3,5]);
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(5);            // the queue is now [2,3,5,5]
// firstUnique.showFirstUnique(); // return 2
// firstUnique.add(2);            // the queue is now [2,3,5,5,2]
// firstUnique.showFirstUnique(); // return 3
// firstUnique.add(3);            // the queue is now [2,3,5,5,2,3]
// firstUnique.showFirstUnique(); // return -1

// Solution 1 O(n) time | O(n) space

var FirstUnique = function(nums) {
  this.nums = nums;
  this.map = new Map();
  for (let num of this.nums) {
      this.map.set(num, this.map.get(num) + 1 || 1);
  }
};

FirstUnique.prototype.showFirstUnique = function() {
  for (let [key, val] of this.map) {
      if (val === 1) return key;
  }
  return -1;
};

FirstUnique.prototype.add = function(value) {
  this.map.set(value, this.map.get(value) + 1 || 1);
};
