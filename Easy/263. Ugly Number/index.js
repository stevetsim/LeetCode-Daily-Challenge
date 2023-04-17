/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false
    if (n <= 5) return true

    for (const i of [2, 3, 5]) {
        if (n % i === 0) return isUgly(n / i)
    }

    return false
};
