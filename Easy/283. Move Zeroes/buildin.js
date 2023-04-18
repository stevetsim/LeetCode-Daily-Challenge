/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.length === 1) return nums

    let cur = nums.length - 1
    let zero_index = nums.indexOf(0)

    while (zero_index < cur) {
        zero_index = nums.indexOf(0)
        nums.push(nums.splice(zero_index, 1))
        cur--
    }
};
