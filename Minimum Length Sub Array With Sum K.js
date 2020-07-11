var minLengthSubArr = function (array, k) {
    let minLength = Infinity;
    let sum = 0
    for (let i = 0, j = 0; i < array.length, i < array.length;) {
        if (sum == k) {
            minLength = Math.min(j - i,minLength)
        }
        if (sum < k) {
            sum = sum + array[j]
            j++
        } else {
            sum = sum - array[i]
            i++
        }
    }
    return minLength;
}

console.log(minLengthSubArr([1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2], 8))
console.log(minLengthSubArr([1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2], 0))
