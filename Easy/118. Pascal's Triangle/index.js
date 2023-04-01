/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        if (i === 0) result.push(getRows([], i + 1))
        else result.push(getRows(result[i-1], i + 1))
    }

    return result
};

function getRows(arr, num) {
    let row = [1]
    for (let i = 0; i < num - 2; i++) {
        row.push(arr[i] + arr[i+1])
    }

    if (row.length !== num) row.push(1)
    return row
}
