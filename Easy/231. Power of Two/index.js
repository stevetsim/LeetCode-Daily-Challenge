
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let slow = 0
    let fast = 2

    while (slow < fast) {
        let slowResult = Math.pow(2, slow)
        let fastResult = Math.pow(2, fast)

        if (slowResult === n || fastResult === n) return true
        else {
            if (slowResult < n && fastResult < n) fast = fast * 2
            else if (slowResult < n && fastResult > n) fast--
            slow++
        }
    }

    return Math.pow(2, slow) === n
};
