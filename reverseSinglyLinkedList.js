// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Solution 1 - iterative O(n) time | O(1) space

var reverseList = function(head) {
  let prev = null;
  while (head) {
      let temp = head.next;
      head.next = prev;
      prev = head;
      head = temp;
  }
  return prev;
};


// Solution 2 - recursive O(n) time | O(n) space

var reverseList = function(head) {
  if (head === null || head.next === null) return head;
  let tmp = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return tmp;
};
