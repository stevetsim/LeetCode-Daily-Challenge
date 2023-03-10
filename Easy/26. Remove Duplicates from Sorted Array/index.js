/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0, p2 = 1
    while (p1 !== nums.length) {
        if (nums[p1] === nums[p2]) nums.splice(p2, 1)
        else {
            p1++
            p2++
        }
    }

    return p1
};
