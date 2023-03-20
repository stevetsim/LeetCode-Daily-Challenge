/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            carry = 1
        } else {
            carry = 0
            digits[i] += 1
            break;
        }
    }

    if (carry) digits.unshift(carry)

    return digits
};
