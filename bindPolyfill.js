var name = {
    first:"nikhil",
    last:"gupta",
}

var printName=function(hometown,Country){
    console.log(this.first +" "+ this.last+" "+ hometown+" "+Country)
}
//both can be used to call the function
// printName.bind(name)()

var printMyname = printName.bind(name,"Delhi")
printMyname("India");

Function.prototype.myBind= function(...args){
    let obj = this;
    let params = args.slice(1)
    return function(...argsFromCallingFn){
        obj.apply(args[0],[...params,...argsFromCallingFn]);
    }
}

var printMyname2 = printName.myBind(name,"Delhi")
printMyname2("India");
