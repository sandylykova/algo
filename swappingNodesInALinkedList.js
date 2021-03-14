// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Solution 1 O(n) time | O(1) space

var swapNodes = function(head, k) {
  let begin = head;
  let end = head;
  let len = 0;
  let node = head;
  while (node !== null) {
      len++;
      if (len === k) begin = node;
      node = node.next;
  }
  let endIdx = len - k;
  while (endIdx > 0) {
      end = end.next;
      endIdx--;
  }
  let temp = begin.val;
  begin.val = end.val;
  end.val = temp;
  return head;
};
