/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 0) return false
    if (num === 1) return true

    let left = 1
    let right = num

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        let result = mid * mid

        if (result === num) return true
        else if (result > num) right = mid
        else if (result < num) left++
    }

    return false
};
