/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.lenght <= 1) return false

    let p1 = 0
    let p2 = 1

    nums = nums.sort()
    while (p1 !== nums.length - 1) {
        if (nums[p1] === nums[p2]) return true
        else if (nums[p1] !== nums[p2]) {
            p1 = p2
            p2 = p1 + 1
        }
    }

    return false
};
