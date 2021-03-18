/*

    PREP

    Parameters
        String
    Returns
        Array with all left and right rotations. Length of array equals to number of letters in string
    Examples
        leftRotations("abc") ➞ ["abc", "bca", "cab"]

        rightRotations("abc") ➞ ["abc", "cab", "bca"]

        leftRotations("abcdef")
        ➞ ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

        rightRotations("abcdef")
        ➞ ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

    PseudoCode
        1. Function recieve as a parameter a string
        2. For number of letters pop last letter and unshift back in reslt array
        3. return array with all new strings created

*/

const leftRotations = (str) => {
    const strArr = [...str];
    const resultArr = [];
    for (let i = strArr.length; i > 0; i--) {
        resultArr.push(strArr.join(''))
        strArr.push(strArr.shift())
    }
    return resultArr
}

const rightRotations = (str) => {
    const strArr = [...str];
    const resultArr = [];
    for (let i = 0; i < strArr.length; i++) {
        resultArr.push(strArr.join(''))
        strArr.unshift(strArr.pop())
    }
    return resultArr
}

console.log(rightRotations("aab"));

/*

    Best Solution

    function leftRotations(str) {
        return str.split("").map((a,i)=>str.slice(i)+str.slice(0,i))
    }

    function rightRotations(str) {
        return str.split("").map((a,i)=>str.slice(-i)+str.slice(0,-i))
    }

*/