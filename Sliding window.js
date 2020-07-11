//Maximum Sum Subarray of Size K, Applying Sliding Window pattern

var maxSlidingWindow = function (nums, k) {
    var windowSum = 0
    var maxSum = 0;

    if (k == 0) return 0;
    if (nums.length === 1) return nums[0];
    for (let i = 0; i < k; i++) {
        windowSum += nums[i]
    }
    for (let i = 1; i < nums.length - k + 1; i++) {
        windowSum = windowSum - nums[i - 1] + nums[i + k - 1]
        maxSum = Math.max(windowSum, maxSum)
    }
    return maxSum;
};

console.log(maxSlidingWindow([10,30,20,50,60,40,40],2))
console.log(maxSlidingWindow([10,30,20,50,60,40,40],3))
console.log(maxSlidingWindow([10,20,10,40,50,10,60],3))
console.log(maxSlidingWindow([10, 20, 10, 40, 50, 10, 60,10], 1))
console.log(maxSlidingWindow([10], 1))
console.log(maxSlidingWindow([10], 0))




