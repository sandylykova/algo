// 82. Remove Duplicates from Sorted List II

// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

// Input: head = [1,2,3,3,4,4,5]
// Output: [1,2,5]

// Solution 1 O(n) time | O(1) space

var deleteDuplicates = function(head) {
    let dummyHead = new ListNode(0, head);
    let prev = dummyHead;
    while (head !== null && head.next !== null) {
        if (head.val !== head.next.val) {
            prev = head;
        } else {
            while (head.next !== null && head.val === head.next.val) {
                head = head.next;
            }
            prev.next = head.next;
        }
        head = head.next;
    }
    return dummyHead.next;
};
