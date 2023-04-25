/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let t = 1

    while (num > 0) {
        num -= t
        t += 2
    }

    return num === 0
};
