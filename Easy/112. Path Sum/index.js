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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if (!root) return 0

    const result = getValue(root)
    return result.includes(targetSum) 
}

function getValue(root) {
    if (!root) return null

    let left = getValue(root.left)
    left = left ? left.map(value => value += root.val) : []
    
    let right = getValue(root.right)
    right = right ? right.map(value => value += root.val) : []

    if (left.length === 0 && right.length === 0) left = [root.val]

    return [...left, ...right]
}
