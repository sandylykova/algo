// 25. Reverse Nodes in k-Group

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]

// Solution O(n) time | O(1) space

var reverseKGroup = function(head, k) {
  if (!head || k === 1) return head;
  let len = 0;
  let node = head;
  while (node) {
      len++;
      node = node.next;
  }
  if (k === len) {
      return reverse(head);
  }
  let numberOfReverse = Math.floor(len / k);
  node = head;
  let newHead = null;
  let prev = null;
  while (numberOfReverse > 0) {
      if (prev) prev.next = null;
      let cur = 1;
      let oldHead = node;
      while (cur < k) {
          node = node.next;
          cur++;
      }
      let next = node.next;
      node.next = null;
      let reversed = reverse(oldHead);
      if (!newHead) newHead = reversed;
      oldHead.next = next;
      numberOfReverse--;
      if (prev) prev.next = reversed;
      prev = oldHead;
      node = next;
  }
  return newHead;
};

function reverse(node) {
  let prev = null;
  while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
  }
  return prev;
}
