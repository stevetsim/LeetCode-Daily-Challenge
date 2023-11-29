/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let object = {}

    for (num of nums) {
        if (object[num]) object[num] = object[num] + 1
        else object[num] = 1
    }

    const order = Object.values(object).sort((a,b) => a - b).reverse().slice(0,k)

    let result = []
    Object.keys(object).forEach((key) => {
        if (order.includes(object[key])) result.push(key)
    })

    return result
};
