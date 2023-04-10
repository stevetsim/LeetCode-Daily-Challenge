/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = new Map()
    let result = false
    
    nums.forEach(num => {
        if (map.has(num)) result = true
        else map.set(num, true)
    })

    return result
};
