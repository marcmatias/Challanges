
/*

    Sort by Number of Calls
    https://edabit.com/challenge/zi2Mvb2GZi3r34JKv

    eval() is a dangerous function, não é boa prática utilizar.
    Neste exemplo o uso de recursão seria uma prática mais adequada como exposto em Best solution

*/

// example functions
f1 = _ => "hello"
f2 = _ => _ => "edabit"
f2 = _ => _ => "edabit"
f3 = _ => _ => _ => "user"

// Solution
function funcSort(arr) {
    const callCountArr = arr.map(func => {
        if (typeof func === "function") {
            const callArr = ['func'];
            let count = 0;
            let result;
            do {
                count++;
                callArr.push('()');
                result = eval(callArr.join(""));
            } while (typeof result == "function");
            return count - 1
        } else return 0
    })
    return callCountArr.map((x, y) => { return { callCount: x, element: arr[y] } }).sort((a, b) => a.callCount - b.callCount).map(x => x.element)
}

console.log(funcSort([f2, f3, f1])) // 2, 3, 1

/*

    Best solution

    const calls = fn => typeof fn === "function" ? 1 + calls(fn()) : 0;
    const funcSort = arr => arr.sort((a, b) => calls(a) - calls(b));

*/

