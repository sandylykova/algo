Given a singly linked list, determine if it is a palindrome.

Example 1:
Input: 1->2
Output: false

Example 2:
Input: 1->2->2->1
Output: true

var isPalindrome = function(head) {
  let arr = []
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
