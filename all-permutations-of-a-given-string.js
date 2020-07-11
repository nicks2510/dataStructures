var Permutation = function (str) {

    helper(str, 0, str.length - 1)

    function helper(str, left, right) {
        //base condition //termination condition
        if (left == right) {
            console.log(str)
            // return str
        }
        //choose
        else {
            for (let i = 1; i <= right; i++) {
                str = swap(str, left, i);
                helper(str, left + 1, right)
                str = swap(str, left, i);
            }
        }
    }
    function swap(str, i, j) {
        var strArray = str.split("");
        strArray[i] = str[j]
        strArray[j] = str[i]
        str = strArray.join("")
        return str
    }
}
console.log(Permutation("ABC"))

/**
 * a bc b  abc a
 * b ac
 * c ba
 *
 * a--a
 * a--b
 * a--c
 *
 *
 *
 *
 */