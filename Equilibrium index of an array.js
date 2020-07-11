var equilibriumi = function (arr) {
    if (arr.length===0) return -1;
    var overallSum = arr.reduce((acc, curr) => acc + curr);
    var leftSum = 0;
    var rightSum = 0;
    var overallLeftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        overallLeftSum += arr[i]
        leftSum = overallLeftSum - arr[i]
        rightSum = overallSum - overallLeftSum
        if (leftSum == rightSum) {
            return i
        }
    }
    return -1
}

// console.log(equilibriumi([-7, 1, 5, 2, -4, 3, 0]))
// console.log(equilibriumi([1, 2, -1, -2, 6]))
// console.log(equilibriumi([]))
// console.log(equilibriumi([1,2,3]))
console.log(equilibriumi([1,2,-1,-2,90]))



