/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b)
    let first = nums[0]
    let largest = nums.length

    if (first !== 0) return 0

    for (let i = 1; i < nums.length; i++) {
        if (first + 1 === nums[i]) first++
        else return first + 1
    }

    return largest
};
