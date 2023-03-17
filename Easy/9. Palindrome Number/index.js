/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let list = x.toString().split('')
    let p1 = 0
    let p2 = list.length - 1

    while (p1 !== p2) {
        if (list[p1] !== list[p2]) return false
        if (p1 + 1 === p2) return true

        p1++
        p2--
    }

    return true
};
