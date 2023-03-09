/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

class Node {
  constructor(val, next) {
    this.val = val
    this.next = next || null
  }
}

function mergeTwoLists(list1, list2) {
  let initial = new Node(0)
  let combinedList = initial

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      combinedList.next = list2
      list2 = list2.next
    } else {
      combinedList.next = list1
      list1 = list1.next
    }
    combinedList = combinedList.next
  }

  combinedList.next = list1 || list2

  return initial.next
}

let list1 = new Node(1)
list1.next = new Node(2)
list1.next.next = new Node(4)

let list2 = new Node(1)
list2.next = new Node(3)
list2.next.next = new Node(4)

mergeTwoLists(list1, list2)
