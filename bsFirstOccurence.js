var bsFirstOccurence=function(arr,key){
    let start = 0;
    let end = arr.length-1
    let result=-1
    while(start <= end){
        var mid=Math.floor(start+(end-start)/2)
        if(key===arr[mid]){
            end=mid-1
            result=mid
        }
        else if(key > arr[mid]){
            start=mid + 1
        }
        else{
            end= mid-1
        }
    }
    return result;
}

console.log(bsFirstOccurence([1,2,2,3,4,5,6,76],2))
console.log(bsFirstOccurence([1,2,2,3,4,5,6,76],3))
