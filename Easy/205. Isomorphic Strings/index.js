/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let pointer_1 = {}
  let pointer_1_arr = []
  s.split('').map((letter) => {
    if (!pointer_1[letter])
      pointer_1[letter] = Object.keys(pointer_1).length + 1

    pointer_1_arr.push(pointer_1[letter])
  })

  let pointer_2 = {}
  let pointer_2_arr = []
  t.split('').map((letter) => {
    if (!pointer_2[letter])
      pointer_2[letter] = Object.keys(pointer_2).length + 1

    pointer_2_arr.push(pointer_2[letter])
  })

  return pointer_1_arr.toString() === pointer_2_arr.toString()
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
