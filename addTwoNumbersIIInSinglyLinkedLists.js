// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Follow up:
// What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

// Example:

// Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 8 -> 0 -> 7

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

// Solution 1 O(n1 + n2) time complexity, where n1 + n2 is a number of elements in both lists | O(1) space complexity without taking the output list into account, and O(max(n1, n2) + 1) to store the output list

var addTwoNumbers = function(l1, l2) {
  l1 = reverseList(l1);
  l2 = reverseList(l2);
  let carry = 0;
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  while (l1 || l2) {
      let val1 = l1 ? l1.val : 0;
      let val2 = l2 ? l2.val : 0;
      let sum = val1 + val2 + carry;
      if (sum > 9) {
          sum = sum % 10;
          carry = 1;
      } else carry = 0;
      cur.next = new ListNode(sum);
      cur = cur.next;
      l1 = l1 !== null ? l1.next : null;
      l2 = l2 !== null ? l2.next : null;
  }
  if (carry) {
      cur.next = new ListNode(carry);
  }
  dummyHead = reverseList(dummyHead.next);
  return dummyHead;
};

const reverseList = head => {
  let prev = null;
   while (head) {
      let temp = head.next;
      head.next = prev;
      prev = head;
      head = temp;
  }
  return prev;
};
