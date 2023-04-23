/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = new Array(n + 1).fill(0)
    
    for (let i = 0; i <= n; i++) {
        let bit = i.toString(2).split('')
        result[i] = bit.filter(b => b === '1').length
    }

    return result
};
