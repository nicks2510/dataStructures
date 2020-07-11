function debounce(fn,delay){
    var timeout;
    var funtionToCall = fn
    return function(){
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            funtionToCall.apply(this,arguments)
        }, delay);
    }
}

var calledFuntion=function(){
    var counter=0
    console.log("test debounce "+ counter)
}
debounce(calledFuntion,300)();
debounce(calledFuntion,300)();