/*

    Number of Apples Left
    https://edabit.com/challenge/wvPTPAqARjE9fswCE

*/

function getNumberOfApples(n, p) {
    const result = n > 0 ? Math.trunc(n - parseInt(p) / 100 * n) : 0
    return result === 0 ? "The children didn't get any apples" : result
}

console.log(getNumberOfApples(0, '10%'))


/*

    Best Solution

    const getNumberOfApples = (n, p) =>
    Math.floor(n * (100 - +p.slice(0, -1)) / 100) || "The children did't get any apple";

*/