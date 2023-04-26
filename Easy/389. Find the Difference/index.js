/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    s = s.split('').sort()
    t = t.split('').sort()

    let cur = 0

    while (cur < s.length) {
        if (s[cur] === t[cur]) cur++
        else return t[cur]
    }

    return t[t.length - 1]
};
