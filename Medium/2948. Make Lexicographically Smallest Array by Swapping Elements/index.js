/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
    let originalNums = [...nums]
    let map = {}
    let prevNum = null
    let key = null

    nums.sort((a, b) => a - b)
    nums.map((num) => {
        const differ = Math.abs(prevNum - num)
        if (prevNum === null || differ > limit) {
            key = num
            map[key] = [num]
        } else if (differ <= limit) map[key].push(num)

        prevNum = num
    })

    const cloneMap = JSON.parse(JSON.stringify(map))
    for (let i = 0; i < originalNums.length; i++) {
        let targetKey = Object.keys(cloneMap).find(key => cloneMap[key].includes(originalNums[i]))
        let replaceValue = map[targetKey].shift()
        originalNums[i] = replaceValue
    }

    return originalNums
};
