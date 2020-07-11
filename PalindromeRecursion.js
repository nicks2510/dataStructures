var Palindrome=function(string){
if(string === "" || string.length === 1){
    return true
}

return string[0]===string[string.length-1] && Palindrome(string.substring(1,string.length-1))
}

console.log(Palindrome("kannak"))
console.log(Palindrome("MalayyalaM"))