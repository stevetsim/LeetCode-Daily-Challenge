/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
        map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1)
    }

    let result = true
    map.forEach(value => {
        if (value !== 0) result = false
    })

    return result
};
