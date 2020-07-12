var binarySearch = function (SortedArr, key) {
    if(!(SortedArr || key))
    return -1
    let startIndex = 0;
    let endIndex = SortedArr.length - 1;
    while (startIndex <= endIndex) {
        let midIndex = Math.floor(startIndex + ((endIndex - startIndex) / 2))
        if (key === SortedArr[midIndex]) {
            return midIndex
        }
        else if (key > SortedArr[midIndex]) {
            startIndex = midIndex + 1
        }
        else {
            endIndex = midIndex - 1
        }
    }
    return -1
}

console.log(binarySearch([1,3,5,7,9],1))
console.log(binarySearch([1,3,5,7,9],10))
console.log(binarySearch([],1))
