/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) return num

    let split = num.toString().split('')
    let result = 0
    for (let i = 0; i < split.length; i++) result += Number(split[i])

    return result < 10 ? result : addDigits(result)
};
