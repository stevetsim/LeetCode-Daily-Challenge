/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let temp = []
    let result = []

    for (let i = 0; i < nums.length; i++) {
        temp.push(nums[i])

        if (nums[i] + 1 !== nums[i + 1]) {
            result.push(addResult(temp))
            temp = []
        }
    }

    return result
};

function addResult(arr) {
    let first = arr[0]
    let last = arr[arr.length - 1]

    return (first === last) ? `${first}` : `${first}->${last}`
}
