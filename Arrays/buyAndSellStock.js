// Problem: Buy and Sell Stock (#217) - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (prices) {
    let maxProfit = 0
    let minPrices = prices[0]

    for (let i = 1; i < prices.length; i++) {
        if (minPrices < prices[i]) {

            let profit = prices[i] - minPrices
            console.log(profit)
            if (maxProfit < profit) {
                maxProfit = profit
            }
        }
        else {
            minPrices = prices[i]
        }
    }
    return maxProfit

};