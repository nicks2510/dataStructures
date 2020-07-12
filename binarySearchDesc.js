var binarySearch= function(arr,key){
    if (!(arr||key))
    return -1
    let start = 0;
    let end= arr.length-1;
    while(start<=end){
        let mid = Math.floor(start + (end-start)/2)
        if(key === arr[mid]){
            return mid
        }
        else if(key > arr[mid]){
            end= mid-1
        }
        else{
            start= mid+1
        }
    }
    return -1
}
console.log(binarySearch([8,7,5,3,1,0],3))
console.log(binarySearch([8,7,5,3,1,0],0))
