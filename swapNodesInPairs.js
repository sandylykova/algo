// Given a linked list, swap every two adjacent nodes and return its head. You may not modify the values in the list's nodes. Only nodes itself may be changed.

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Solution 1 O(n) time | O(1) space

var swapPairs = function(head) {
  if (!head) return head;
  let dummyHead = new ListNode(0);
  dummyHead.next = head;
  let prevNode = dummyHead;
  while (head !== null && head.next !== null) {
      let first = head;
      let second = head.next;
      prevNode.next = second;
      first.next = second.next;
      second.next = first;
      prevNode = first;
      head = first.next;
  }
  return dummyHead.next;
};
