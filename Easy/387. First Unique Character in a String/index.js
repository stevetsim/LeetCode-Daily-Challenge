/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s =  s.split('')
    for (let i = 0; i < s.length; i++) {
        let temp = s[i]
        s[i] = null

        if (s.indexOf(temp) === -1) return i

        s[i] = temp
    }

    return -1
};
