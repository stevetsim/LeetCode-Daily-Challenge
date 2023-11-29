/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let object = {}
    
    for (let i = 0; i < strs.length; i++) {
        let letters = [...strs[i]].sort().join("")

        if (letters in object) object[letters].push(strs[i])
        else object[letters] = [strs[i]]
    }

    return Object.values(object)
};
