/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {
    if (prices.length < 0 || k < 1) return 0;
    
    if (k > prices.length / 2) {
        var maxP = 0;
        for (let i = 1; i < prices.length; i++) {
            maxP += Math.max(0, prices[i] - prices[i - 1])
        }
        return maxP;
    }

    var buy = [];
    var sell = [];

    for (let i = 0; i < k; i++) {
        buy[i] = -Infinity;
        sell[i] = 0;
    }

    for (let i = 0; i < prices.length; i++) {
        buy[0] = Math.max(buy[0], -prices[i])
        sell[0] = Math.max(sell[0], buy[0] + prices[i])
        for (let j = 1; j < k; j++) {
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i])
            sell[j] = Math.max(sell[j], buy[j] + prices[i])
        }
    }
    return sell[k - 1]
};

console.log(maxProfit(2,[2,4,1]))
