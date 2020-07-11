var maxProfit = function(prices) {
    var minimunSoFar=prices[0],maxProfit=0;
    for(let i=1;i<prices.length;i++){
        minimunSoFar=Math.min(minimunSoFar,prices[i])
        maxProfit=Math.max(maxProfit,prices[i]-minimunSoFar)
    }
    return maxProfit
};

console.log(maxProfit([7,1,5,3,6,4]))