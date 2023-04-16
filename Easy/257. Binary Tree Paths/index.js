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
 * @return {string[]}
 */

let result = []

var binaryTreePaths = function(root) {
    if (!root) return []
    
    result = []
    generate(root)

    return result
};

function generate (root, arr = '') {
    if (!root) return

    arr += arr !== '' ? `->${root.val}` : `${root.val}`
    let left = generate(root.left, arr)
    let right = generate(root.right, arr)

    if (!left && !right) result.push(arr)
    
    return root.val
};
