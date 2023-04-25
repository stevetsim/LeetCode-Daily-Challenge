/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    magazine = magazine.split('')

    for (let i = 0; i < ransomNote.length; i++) {
        let token = ransomNote[i]
        if (magazine.indexOf(token) === -1) return false
        else magazine[magazine.indexOf(token)] = null
    }

    return true
};
