/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0
    let count = 32

    while (count--) {
        const lastBit = n & 1
        const reBit = lastBit << count

        result |= reBit
        n = n >> 1
    }

    return result >>> 0
};
