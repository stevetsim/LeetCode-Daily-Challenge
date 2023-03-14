/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map()
    for (let letter of s) map.set(letter, map.get(letter) + 1 || 1)
    if (map.size === 1) return s.length

    let num_odd = 0
    for (let [key, value] of map) if (value % 2 !== 0) num_odd++

    return num_odd ? s.length - num_odd + 1 : s.length
}
