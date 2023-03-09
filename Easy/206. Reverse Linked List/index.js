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

var reverseList = function(head) {
    let result = null, cur = head
    while (cur) {
        let next = cur.next
        cur.next = result
        result = cur
        cur = next
    }

    return result
}

var reverseList2 = function(head) {
    let result = null

    while(head) {
        let temp = new ListNode(head.val)
        
        if (result === null) result = temp
        else {
            temp.next = result
            result = temp
        }
        
        head = head.next
    }

    return result
};


