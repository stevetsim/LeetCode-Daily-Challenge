/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let list = head
    let table = new Map()

    while(list) {
        if (table.has(list)) return table.get(list)
        else {
            table.set(list, list)
            list = list.next
        }
    }

    return null
};
