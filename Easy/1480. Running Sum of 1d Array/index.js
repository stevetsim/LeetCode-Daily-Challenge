/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let sum = 0
  return nums.map((num) => sum += num)
}

console.log(runningSum([1, 2, 3, 4]))

// sum = 0
// sum = 1 -> [1]
// sum = 1+2 -> 3 -> [1,3]
// sum = 3+3 -> 6 -> [1,3,6]
// sum = 6+4 -> 10 -> [1,3,6,10]