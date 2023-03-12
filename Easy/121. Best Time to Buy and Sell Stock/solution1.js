/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let day = prices[0]
    let profit = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < day) {
            day = prices[i]
        } else {
            let diff = prices[i] - day
            profit = diff > profit ? diff : profit
        }
    }

    return profit
};
