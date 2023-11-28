/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    s = Array.from(s).sort()
    t = Array.from(t).sort()

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) return false
    }

    return true
};
