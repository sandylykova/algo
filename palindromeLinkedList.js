// Given a singly linked list, determine if it is a palindrome.

// Example 1:
// Input: 1->2
// Output: false

// Example 2:
// Input: 1->2->2->1
// Output: true

// Solution 1 O(n) time | O(n) space

var isPalindrome = function(head) {
  let arr = [];
  while (head) {
      arr.push(head.val);
      head = head.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
      if (arr[left] !== arr[right]) return false;
      left++;
      right--;
  }
  return true;
};

// Solution 2 O(n) time | O(1) space

function isPalindrome(head) {
  if(head == null || head.next == null) return true;
      let slow = head;
      let fast = head;
      while (fast.next != null && fast.next.next != null) {
          slow = slow.next;
          fast = fast.next.next;
      }
      slow.next = reverseList(slow.next);
      slow = slow.next;
      while (slow != null) {
          if(head.val != slow.val) return false;
          head = head.next;
          slow = slow.next;
      }
      return true;
}

function reverseList(head) {
      var pre = null;
      var next = null;
      while(head != null) {
          next = head.next;
          head.next = pre;
          pre = head;
          head = next;
      }
      return pre;
}

