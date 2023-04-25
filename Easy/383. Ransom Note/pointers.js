/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    ransomNote = ransomNote.split('').sort()
    magazine = magazine.split('').sort()

    let p1 = 0, p2 = 0

    while (p1 < ransomNote.length && p2 < magazine.length) {
        if (ransomNote[p1] === magazine[p2]) p1++
        p2++
    }

    return p1 === ransomNote.length
};
