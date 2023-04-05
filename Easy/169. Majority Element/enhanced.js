/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums

    let n = Math.floor(nums.length / 2)
    let map = new Map()

    for (let i = 0; i < nums.length; i ++) {
        let num = nums[i]

        if (map.has(num)) map.set(num, map.get(num) + 1)
        else map.set(num, 1)
        
        if (map.get(num) > n) return num
    }
};
