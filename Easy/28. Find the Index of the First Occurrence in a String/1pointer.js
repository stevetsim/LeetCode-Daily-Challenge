/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let cur = 0

    while (cur < haystack.length) {
        let sub = haystack.substring(cur, cur + needle.length)
        if (sub === needle) break
        else cur++
    }

    return cur === haystack.length ? -1 : cur
} 
