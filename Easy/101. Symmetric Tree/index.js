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
 * @return {boolean}
 */

let result

var isSymmetric = function(root) {
    result = true
    checkSymmetric(root.left, root.right)
    return result    
};

function checkSymmetric(l, r) {
    if (!l && !r) return
    if (l?.val !== r?.val) result = false

    checkSymmetric(l?.left, r?.right)
    checkSymmetric(l?.right, r?.left)
}
