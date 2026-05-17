// Problem: Buy and Sell Stock (#121) - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = prices[0]

    for(let i = 1; i < prices.length; i++) {
        if(minPrice > prices[i]) {
            minPrice = prices[i]
        }

        maxProfit = maxProfit > (prices[i] - minPrice) ? maxProfit : (prices[i] - minPrice)
    }

    return maxProfit
};
