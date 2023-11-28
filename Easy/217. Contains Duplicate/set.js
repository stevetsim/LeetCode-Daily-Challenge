/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Runtime shorter but required more memory compare with two pointers solution
var containsDuplicate = function(nums) {
    const set = new Set(nums)
    return set.size !== nums.length
};
