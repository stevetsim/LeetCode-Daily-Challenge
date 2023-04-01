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
var minDepth = function(root) {
    if (!root) return 0
    else if (!root.left) return minDepth(root.right) + 1
    else if (!root.right) return minDepth(root.left) + 1

    return Math.min(minDepth(root.right), minDepth(root.left)) + 1
};