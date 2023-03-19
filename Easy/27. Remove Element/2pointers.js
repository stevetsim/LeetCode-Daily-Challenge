/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let left = 0, right = nums.length - 1

    while (left <= right) {
        if (nums[right] === val) right--
        else if (nums[left] === val) {
            nums[left] = nums[right]
            left++
            right--
        } else left++
    }

    return left
};
