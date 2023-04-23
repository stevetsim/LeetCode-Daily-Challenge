/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n === 1) return true
    if (n < -3  || n < 3) return false

    let left = 0
    let right = Math.floor(n/2)
    let mid = Math.floor(right/2)

    while (left < right) {
        let result = Math.pow(3, mid)
        if (result === n) return true
        else {
            if (result > n) right = mid
            else left = mid + 1

            mid = Math.floor((left+ right)/2)
        }
    }

    return Math.pow(3, left) === n
};
