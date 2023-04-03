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
let result
var preorderTraversal = function(root) {
    result = []

    travel(root)

    return result
};


function travel(root) {
    if (!root) return
    result.push(root.val)
    travel(root.left)
    travel(root.right)
}
