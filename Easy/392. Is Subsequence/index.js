/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Solution 1
// var isSubsequence = function (s, t) {
//   if (s.length > t.length) return false
//   let sPointer = 0
//   for (let i = 0; i < t.length; i++) {
//     if (s[sPointer] === t[i]) sPointer++
//   }

//   return sPointer === s.length
// }

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false
  let s_pointer = 0
  for (let i = 0; i < t.length; i++) {
    if (s[s_pointer] === t[i]) s_pointer++
  }

  return s_pointer === s.length
}

// Solution 2
var isSubsequence_2 = function (s, t) {
  if (s.length === 0) return true
  if (s.length > t.length) return false

  let check_list = t.split('')
  let sequence = []
  for (let i = 0; i < s.length; i++) {
    let index = check_list.indexOf(s[i])
    if (index === -1) return false

    sequence.push(index)
    check_list = check_list.slice(index + 1)
  }

  return true
}

console.log(isSubsequence('abc', 'ahbgdc'))
console.log(isSubsequence('axc', 'ahbgdc'))
