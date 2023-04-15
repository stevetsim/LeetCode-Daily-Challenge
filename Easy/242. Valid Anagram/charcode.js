/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let arr = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97]++
        arr[t.charCodeAt(i) - 97]--
    }

    return !arr.some(num => num !== 0)
};
