/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return []

    let count = 1
    let temp_count = 1
    let pointer = 0

    nums = nums.sort((a,b) => a - b)

    while (pointer < nums.length) {
        if (nums[pointer + 1] === nums[pointer]) {
            pointer++
            continue
        }
        else if (nums[pointer] + 1 === nums[pointer + 1]) {
            temp_count++
            if (temp_count > count) count = temp_count
        } else temp_count = 1

        pointer++
    }

    return count
};
