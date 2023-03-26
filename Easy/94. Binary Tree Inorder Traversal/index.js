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
 * @return {number[]}
 */
let result = []

var inorderTraversal = function(root) {
    result = []
    getInorder(root)

    return result
}

function getInorder(node) {
    if (!node) return

    getInorder(node.left)

    result.push(node.val)

    getInorder(node.right)
}
