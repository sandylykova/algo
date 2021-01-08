// 61. Rotate List

// Given the head of a linked list, rotate the list to the right by k places.

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// Solution 1

var rotateRight = function(head, k) {
  if (!head) return head;
  let len = 0;
  let node = head;
  while (node) {
      node = node.next;
      len++;
  }
  k = k % len;
  if (k === 0) return head;
  node = head;
  while (len - k > 1) {
      len--;
      node = node.next;
  }
  let tail = node;
  let newHead = node.next;
  while (node.next !== null) {
      node = node.next;
  }
  node.next = head;
  tail.next = null;
  return newHead;
};
