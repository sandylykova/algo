// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Solution 1 O(max(n, m)) - time. O(max(n, m)) space. Assume that m and n represents the length of l1 and l2 respectively, the algorithm above iterates at most max(m, n) times. The length of the new list is at most max(m,n) + 1.

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let p1 = l1;
  let p2 = l2;
  let dummyHead = new ListNode(0);
  let cur = dummyHead;
  while (p1 || p2) {
      let val1 = p1 ? p1.val : 0;
      let val2 = p2 ? p2.val : 0;
      let sum = val1 + val2 + carry;
      if (sum > 9) {
          sum = sum % 10;
          carry = 1;
      } else carry = 0;
      cur.next = new ListNode(sum);
      cur = cur.next;
      if (p1) p1 = p1.next;
      else p1 = false;
      if (p2) p2 = p2.next;
      else p2 = false;
  }
  if (carry > 0) {
      cur.next = new ListNode(carry);
  }
  return dummyHead.next;
};

// Solution 2 - 'cleaner first solution'

var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let carry = 0;
  let current = dummyHead;
  while (p1 || p2) {
      let value1 = p1 ? p1.val : 0;
      let value2 = p2 ? p2.val : 0;
      let sum = value1 + value2 + carry;
      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;
      p1 = p1 ? p1.next : null;
      p2 = p2 ? p2.next : null;
  }
  if (carry) {
      current.next = new ListNode(carry);
  }
  return dummyHead.next;
};
