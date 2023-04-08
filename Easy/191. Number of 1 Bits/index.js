/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0
    let count = 32
    
    while (count--) {
        let lastBit = n & 1
        if (lastBit === 1) result++
        n = n >> 1
    }

    return result
};
