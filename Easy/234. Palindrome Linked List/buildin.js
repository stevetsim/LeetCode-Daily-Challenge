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
     let arr = []
     let reverseArr = []

     while (head) {
         if (head.val !== null) arr.push(head.val)
         head = head.next
     }

     reverseArr = arr
     return arr.toString() === reverseArr.reverse().toString()
};
