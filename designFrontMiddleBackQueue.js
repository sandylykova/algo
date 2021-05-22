// 1670. Design Front Middle Back Queue

// Design a queue that supports push and pop operations in the front, middle, and back.

// Implement the FrontMiddleBack class:

// FrontMiddleBack() Initializes the queue.
// void pushFront(int val) Adds val to the front of the queue.
// void pushMiddle(int val) Adds val to the middle of the queue.
// void pushBack(int val) Adds val to the back of the queue.
// int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
// int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
// int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
// Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:

// Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
// Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].

// Input:
// ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
// [[], [1], [2], [3], [4], [], [], [], [], []]
// Output:
// [null, null, null, null, null, 1, 3, 4, 2, -1]

// Explanation:
// FrontMiddleBackQueue q = new FrontMiddleBackQueue();
// q.pushFront(1);   // [1]
// q.pushBack(2);    // [1, 2]
// q.pushMiddle(3);  // [1, 3, 2]
// q.pushMiddle(4);  // [1, 4, 3, 2]
// q.popFront();     // return 1 -> [4, 3, 2]
// q.popMiddle();    // return 3 -> [4, 2]
// q.popMiddle();    // return 4 -> [2]
// q.popBack();      // return 2 -> []
// q.popFront();     // return -1 -> [] (The queue is empty)

// Solution 1 using doubly linked list

function LL(val, prev, next) {
  this.val = val || 0;
  this.prev = prev || null;
  this.next = next || null;
}

var FrontMiddleBackQueue = function() {
  this.head = null;
  this.tail = null;
  this.len = 0;
};

FrontMiddleBackQueue.prototype.pushFront = function(val) {
  let node = new LL(val);
  if (this.len === 0) {
      this.head = node;
      this.tail = node;
  } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
  }
  this.len++;
};

FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
  if (this.len <= 1) {
      return this.pushFront(val);
  }
  let node = new LL(val);
  let mid = Math.floor(this.len / 2);
  let head = this.head;
  while (mid > 1) {
      head = head.next;
      mid--;
  }
  let next = head.next;
  head.next = node;
  node.prev = head;
  node.next = next;
  if (next) next.prev = node;
  this.len++;
};

FrontMiddleBackQueue.prototype.pushBack = function(val) {
  if (this.len === 0) {
      this.pushFront(val);
      return;
  }
  let node = new LL(val);
  this.tail.next = node;
  node.prev = this.tail;
  this.tail = node;
  this.len++;
};

FrontMiddleBackQueue.prototype.popFront = function() {
  if (this.len === 0) {
      return -1;
  }
  let front = this.head;
  let next = front.next;
  if (next) next.prev = null;
  this.head = next;
  this.len -= 1;
  return front.val;
};

FrontMiddleBackQueue.prototype.popMiddle = function() {
  if (this.len <= 2) {
      return this.popFront();
  }
  let mid = Math.ceil(this.len / 2);
  let head = this.head;
  while (mid > 1) {
      head = head.next;
      mid--;
  }
  let prev = head.prev;
  let next = head.next;
  head.prev = null;
  head.next = null;
  if (prev) prev.next = next;
  if (next) next.prev = prev;
  this.len--;
  return head.val;
};

FrontMiddleBackQueue.prototype.popBack = function() {
  if (this.len <= 1) {
      return this.popFront();
  }
  let tail = this.tail;
  let prev = tail.prev;
  prev.next = null;
  tail.prev = null;
  this.tail = prev;
  this.len--;
  return tail.val;
};
