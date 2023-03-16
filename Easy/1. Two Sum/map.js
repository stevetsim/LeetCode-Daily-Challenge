/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let remain = target - nums[i]

        if ( map.has(nums[i]) ) return [map.get(nums[i]), i]
        else map.set(remain, i)
    }
};
