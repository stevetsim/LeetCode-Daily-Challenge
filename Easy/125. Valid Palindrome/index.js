/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^A-Za-z0-9]/g
    let word = s.replace(regex, '').toLowerCase()

    let p1 = 0
    let p2 = word.length - 1

    while (p1 < p2) {
        if (word[p1] !== word[p2]) return false
        p1++
        p2--
    }

    return true
};
