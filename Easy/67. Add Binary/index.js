/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let p1 = a.length - 1, p2 = b.length - 1
    let result = ''
    let carry = 0

    while (p1 >= 0 || p2 >= 0) {
        let a1 = Number(a[p1]) || 0
        let b1 = Number(b[p2]) || 0

        let sum = a1 + b1 + carry
        carry = sum > 1 ? 1 : 0
        
        result = sum % 2 + result
        
        p1--
        p2--
    }

    if (carry) result = carry + result
    return result
};
