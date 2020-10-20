// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]

// Solution 1 iterative O(n) time | O(n) space

var flatten = function(head) {
  if (head === null) return head;
  let pseudoHead = new Node(0, null, head, null);
  let cur = pseudoHead;
  let prev = pseudoHead;
  let stack = [head];
  while (stack.length) {
    cur = stack.pop();
    prev.next = cur;
    cur.prev = prev;
    if (cur.next) stack.push(cur.next);
    if (cur.child) {
      stack.push(cur.child);
      cur.child = null;
    }
    prev = cur;
  }
  pseudoHead.next.prev = null;
  return pseudoHead.next;
};

// Solution 2 recursive O(n) time | O(n) space

var flatten = function(head) {
  if (head === null) return head;
  let pseudoHead = new Node(0, null, head, null);
  flattenDFS(pseudoHead, head);
  pseudoHead.next.prev = null;
  return pseudoHead.next;
};
const flattenDFS = (prev, cur) => {
  if (cur === null) return prev;
  cur.prev = prev;
  prev.next = cur;
  let tempNext = cur.next;
  let tail = flattenDFS(cur, cur.child);
  cur.child = null;
  return flattenDFS(tail, tempNext);
};
