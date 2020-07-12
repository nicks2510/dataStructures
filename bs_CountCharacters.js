var countChar = function(arr,key){
    
    let start = 0;
    let end = arr.length-1
    let firstOcc=-1
    let lastOcc = -1
    while(start <= end){
        var mid=Math.floor(start+(end-start)/2)
        if(key===arr[mid]){
            end=mid-1
            firstOcc=mid
        }
        else if(key > arr[mid]){
            start=mid + 1
        }
        else{
            end= mid-1
        }
    }

    //if there is no occurence of the element= key
    if(firstOcc<0)
    return 0

    start = 0;
    end = arr.length-1

    while(start <= end){
        var mid=Math.floor(start+(end-start)/2)
        if(key===arr[mid]){
            start=mid+1
            lastOcc=mid
        }
        else if(key > arr[mid]){
            start=mid + 1
        }
        else{
            end= mid-1
        }
    }
    
    return lastOcc-firstOcc + 1;
}

console.log(countChar([1,2,2,2,2,2,2,3,4,5,6,76],2))
console.log(countChar([1,2,2,3,4,5,6,76],76))
console.log(countChar([1,2,2,3,4,5,6,76],9))



