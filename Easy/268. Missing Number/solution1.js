
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let total = n * (n + 1) / 2

    let sum = nums.reduce((accu, curr) => accu + curr, 0)

    return total - sum
};
