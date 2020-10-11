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
