/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let p1 = 0, p2 = 0, freeze = 0

    while (p1 < haystack.length) {
        let h = haystack[p1]
        let n = needle[p2]

        if (h === n) {
            if (p2 === 0) freeze = p1
            if (p2 === needle.length - 1) break
            p1++
            p2++
        } else {
            freeze++
            p1 = freeze
            p2 = 0
        }
    }

    console.log(p1)

    return p1 === haystack.length ? -1 : p1 - (needle.length - 1)
}
