// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// Solution 1 O(n) time | O(1) space

var partition = function(head, x) {
  if (!head) return head;
  let smallerHead = new ListNode(0);
  let biggerHead = new ListNode(0);
  let smaller = smallerHead;
  let bigger = biggerHead;
  while (head) {
      if (head.val < x) {
          smallerHead.next = head;
          smallerHead = smallerHead.next;
      } else {
          biggerHead.next = head;
          biggerHead = biggerHead.next;
      }
      head = head.next;
  }
  smallerHead.next = bigger.next;
  biggerHead.next = null;
  return smaller.next;
};

// Solution 2 O(n) time | O(n) space

var partition = function(head, x) {
    if (!head) return head;
    let cur = head;
    let smaller = [];
    let bigger = [];
    while (cur) {
        if (cur.val < x) {
            smaller.push(cur.val);
        } else {
            bigger.push(cur.val);
        }
        cur = cur.next;
    }
    let newArr = smaller.concat(bigger);
    let newHead = new ListNode(newArr[0]);
    let node = newHead;
    let i = 1;
    while (i < newArr.length) {
        node.next = new ListNode(newArr[i]);
        i++;
        node = node.next;
    }
    return newHead;
};
