/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let result = []
    let map = {
        '{': '}',
        '[': ']',
        '(': ')'
    }

    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        if (map[c]) result.push(map[c])
        else if (result.pop() !== c) return false
    }

    return result.length === 0
};
