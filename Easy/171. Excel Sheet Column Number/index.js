/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(t) {
    t = t.split("").reverse()
    
    const table = '?ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    let result = 0

    if (t.length === 1) return table.indexOf(t[0])

    for (let i = 0; i < t.length; i++) {
        if (i === 0) result += table.indexOf(t[i])
        else result += Math.pow(26, i) * table.indexOf(t[i])
    }

    return result
};
