/**
 * @param {number[]} nums
 * @return {number}
 */

// If the index is on the left edge of the array,
// then the left sum is 0 because there are no elements to the left.
// This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Solution 1
var pivotIndex = function (nums) {
  let left = 0
  let right = 0
  let sum = 0
  nums.forEach((x) => (sum += x))
  for (let i = 0; i < nums.length; i++) {
    right = sum - nums[i] - left
    if (right == left) return i
    left += nums[i]
  }
  return -1
}

// Solution 2
var pivotIndex2 = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    let left_arr = nums.slice(0, index)
    let right_arr = nums.slice(index + 1)

    let left_sum = left_arr.reduce((prev, curr) => prev + curr, 0)
    let right_sum = right_arr.reduce((prev, curr) => prev + curr, 0)

    if (index === 0 && right_sum === 0) return index
    if (index === nums.length - 1 && left_sum === 0) return index
    if (left_sum === right_sum) return index
  }

  return -1
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
console.log(pivotIndex([1, 2, 3]))
console.log(pivotIndex([2, 1, -1]))
console.log(pivotIndex([-1, 1, 1]))
