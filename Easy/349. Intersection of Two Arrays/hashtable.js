/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
    let map = new Map()

    for (let i = 0; i < nums1.length; i++) {
        if (!map.has(nums1[i])) map.set(nums1[i])
    }

    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i]) && !result.includes(nums2[i])) result.push(nums2[i]) 
    }

    return result
};
