/*

    Tile Teamwork Tactics
    https://edabit.com/challenge/QGvL9nFnn2PJwRgyp

    PREP
        Parameters
            Two integers numbers

        Returns
            Boolean

        Examples
            possibleBonus(3, 7) ➞ true

            possibleBonus(1, 9) ➞ false

            possibleBonus(5, 3) ➞ false

        PseudoCode
            1. Receive two integers positive numbers
            2. Check if first number + 6 (or + 5 + 4 + 3 + 2 + 1) is <= than second number
            3. return a boolean as result

*/

function possibleBonus(a, b) {
    return a < b && a + 6 >= b ? true : false
}

console.log(possibleBonus(1, 7))

/*

    Best Solution

    function possibleBonus(a, b) {
        return b - a <= 6 && b - a > 0
    }


*/