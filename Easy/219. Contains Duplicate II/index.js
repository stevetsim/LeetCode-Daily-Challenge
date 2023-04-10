/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    let result = false
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let data = i - map.get(nums[i])
            if (data <= k) {
                result = true
                break;
            } else map.set(nums[i], i)
        } else map.set(nums[i], i)
    }

    return result
};
