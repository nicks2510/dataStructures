var maxProfit = function(prices) {
    let profit = 0;
    for(let i=1;i<prices.length;i++){
        profit += prices[i] - prices[i-1]
    }
    return profit
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))

