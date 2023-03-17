/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    for (let i = 0; i < s.length; i++) {
        let cur = s.charAt(i)
        let next = s.charAt(i + 1)

        if (next && map[cur] < map[next]) {
            result += map[next] - map[cur]
            i++
        } else {
            result += map[cur]
        }
    }

    return result
};
