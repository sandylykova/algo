// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

// Solution 1 recursive O(n + m) time | O(n + m) space

var mergeTwoLists1 = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  else if (l1.val < l2.val) {
      l1.next = mergeTwoLists1(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists1(l1, l2.next);
      return l2;
  }
};

// Solution 2 iterative O(n + m) time | O(1) space

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let curNode = dummyHead;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curNode.next = l1;
            l1 = l1.next;
        } else {
            curNode.next = l2;
            l2 = l2.next;
        }
        curNode = curNode.next;
    }
    if (l1 !== null) {
        curNode.next = l1;
    } else if (l2 !== null) {
        curNode.next = l2;
    }
    return dummyHead.next;
};

// Solution 2 O(n + m) time | O(1) space

class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  function mergeLinkedLists(headOne, headTwo) {
    let p1 = headOne;
      let p1Prev = null;
      let p2 = headTwo;
      while (p1 !== null && p2 !== null) {
          if (p1.value < p2.value) {
              p1Prev = p1;
              p1 = p1.next;
          } else {
              if (p1Prev !== null) p1Prev.next = p2;
              p1Prev = p2;
              p2 = p2.next;
              p1Prev.next = p1;
          }
      }
      if (p1 === null) p1Prev.next = p2;
      return headOne.value < headTwo.value ? headOne : headTwo;
  }
