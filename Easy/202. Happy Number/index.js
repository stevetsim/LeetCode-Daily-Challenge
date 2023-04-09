
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = {}
    while (n !== 1 && !seen[n]) {
        seen[n] = true
        n = ('' + n).split('')
        
        let result = 0
        n.forEach(num => result += Math.pow(Number(num), 2))

        n = result
    }

    return n === 1
};
