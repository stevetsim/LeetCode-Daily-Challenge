/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = []
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    set1.forEach(n => {
        if (set2.has(n)) result.push(n)
    })

    return result
};
