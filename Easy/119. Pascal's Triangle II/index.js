/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (r) {
    var ans = [1]
    var temp = 1
    for(var i=1;i<=r;i++){
        temp = temp*(r-i+1)/i
        ans.push(temp)
    }
    return ans
};
