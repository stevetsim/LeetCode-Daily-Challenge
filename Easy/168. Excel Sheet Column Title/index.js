/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const table = '?ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    if (columnNumber <= 26) return table[columnNumber]

    let result = ''

    while (columnNumber) {
        let remaining = columnNumber % 26
        columnNumber = Math.floor(columnNumber/26)

        if (remaining === 0) {
            remaining = 26
            columnNumber -= 1
        }

        result = table[remaining] + result
    }

    return result
};
