// 1019. Next Greater Node In Linked List

// We are given a linked list with head as the first node.  Let's number the nodes in the list: node_1, node_2, node_3, ... etc.

// Each node may have a next larger value: for node_i, next_larger(node_i) is the node_j.val such that j > i, node_j.val > node_i.val, and j is the smallest possible choice.  If such a j does not exist, the next larger value is 0.

// Return an array of integers answer, where answer[i] = next_larger(node_{i+1}).

// Note that in the example inputs (not outputs) below, arrays such as [2,1,5] represent the serialization of a linked list with a head node value of 2, second node value of 1, and third node value of 5.

// Input: [1,7,5,1,9,2,5,1]
// Output: [7,9,9,9,0,5,0,0]

// Solution 1 O(n) time | O(n) space

var nextLargerNodes = function(head) {
  if (!head) return [];
  let stack = [[head.val, 0]];
  let node = head.next;
  let result = [];
  let i = 1;
  while (node) {
      while (stack.length && stack[stack.length - 1][0] < node.val) {
          let [val, idx] = stack.pop();
          result[idx] = node.val;
      }
      stack.push([node.val, i]);
      node = node.next;
      i++;
  }
  while (stack.length > 0) {
      let [val, idx] = stack.pop();
      result[idx] = 0;
  }
  return result;
};
