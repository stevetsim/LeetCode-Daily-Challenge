/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if (n === 1) return isBadVersion(n)
        
        let first = 1
        let last = n

        while (first < last) {
            let temp = Math.floor((last + first) / 2)
            if (isBadVersion(temp)) last = temp
            else {
                if (isBadVersion(temp + 1)) return temp + 1
                else first = temp
            }
        }

        return first
    };
};
