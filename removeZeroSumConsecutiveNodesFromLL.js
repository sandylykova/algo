// 1171. Remove Zero Sum Consecutive Nodes from Linked List

// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.

// After doing so, return the head of the final linked list.  You may return any such answer.

// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.

// Solution 1

var removeZeroSumSublists = function(head) {
  if (!head) return head;
  let dummyHead = new ListNode(0, head);
  let sum = 0;
  let map = new Map();
  let node = head;
  map.set(0, dummyHead);
  while (node) {
      sum += node.val;
      if (map.has(sum)) {
          let currSum = sum;
          let nodeTodelete = map.get(sum).next;
          while (nodeTodelete !== node) {
              currSum += nodeTodelete.val;
              map.delete(currSum);
              nodeTodelete = nodeTodelete.next;
          }
          map.get(sum).next = node.next;
      } else map.set(sum, node);
      node = node.next;
  }
  return dummyHead.next;
};
