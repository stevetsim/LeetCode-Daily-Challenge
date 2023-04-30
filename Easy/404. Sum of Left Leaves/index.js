/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sum

var sumOfLeftLeaves = function(root) {
    sum = 0
    getLeaves(root, null)
    return sum

};

function getLeaves(root, from) {
    if (!root) return

    let left = getLeaves(root.left, 'left')
    let right = getLeaves(root.right, 'right')

    if (from === 'left' && !root.left && !root.right)
        sum += root.val
}
