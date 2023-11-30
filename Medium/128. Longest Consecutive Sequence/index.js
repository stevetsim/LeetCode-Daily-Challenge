/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;

    nums = Array.from(new Set(nums)); // Remove duplicates

    let currentStreak = 1;
    let longestStreak = 1;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            currentStreak++;
            longestStreak = Math.max(longestStreak, currentStreak);
        } else if (nums[i] !== nums[i + 1]) {
            currentStreak = 1;
        }
    }

    return longestStreak;
};
