/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    let left = null
    let right = null
    let temp = null

    while (fast && fast.next) {
        fast = fast.next.next
        temp = slow.next
        slow.next = left
        left = slow
        slow = temp
    }

    right = fast ? slow.next : slow

    while (right && left) {
        if (right.val !== left.val) return false
        left = left.next
        right = right.next
    }

    return true
};
