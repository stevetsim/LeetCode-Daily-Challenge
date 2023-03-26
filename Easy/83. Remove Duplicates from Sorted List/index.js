/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) return head

    let slow = head
    let fast = slow.next

    while (slow) {
        if (fast && slow.val === fast.val) fast = fast.next
        else {
            slow.next = fast
            slow = slow.next
        }
    }

    return head
};
