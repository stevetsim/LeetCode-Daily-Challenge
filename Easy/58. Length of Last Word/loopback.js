/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let cur = 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ' ') {
            if (cur) return cur
            continue
        }

        cur++
    }

    return cur
};
