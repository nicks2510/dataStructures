var maxProfit = function (prices) {
    var fb = -Infinity; //first buy
    var fs = 0 //first sell
    var sb = -Infinity;
    var ss = 0;

    for (let i = 0; i < prices.length; i++) {
        fb = Math.max(fb, - prices[i]) //subtract
        fs = Math.max(fs, fb + prices[i])//add
        sb = Math.max(sb, fs - prices[i])//subtract
        ss = Math.max(ss, sb + prices[i])//add

    }
    return ss;

};

console.log(maxProfit([3,3,5,0,0,3,1,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))