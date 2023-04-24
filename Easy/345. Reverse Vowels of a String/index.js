/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    s = s.split('')
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            [s[left], s[right]] = [s[right], s[left]]
            left ++
            right --
        } else if (!vowels.includes(s[left]) && !vowels.includes(s[right])) {
            left ++
            right --
        } else if (!vowels.includes(s[left])) left ++
        else if (!vowels.includes(s[right])) right --
    }

    return s.join('')
};
