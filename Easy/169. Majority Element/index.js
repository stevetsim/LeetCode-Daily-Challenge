/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length ===  0) return null
    else if (nums.length === 1) return nums

    let map = new Map()
    let majority = null

    nums.forEach((num) => {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1)
            majority = majority ? map.get(majority) < map.get(num) ? num : majority : num
        } else map.set(num, 1)
    })

    return majority
};
