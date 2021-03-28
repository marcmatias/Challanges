/*

    Right Shift by Division
    https://edabit.com/challenge/ALGbgMWLuEdrh22fB


    PREP
    Parameters
        positive or negative int x, positive int y

    Return
        positive or negative int result

    Examples
        shiftToRight(80, 3) ➞ 10

        shiftToRight(-24, 2) ➞ -6

        shiftToRight(-5, 1) ➞ -3

        shiftToRight(4666, 6) ➞ 72

        shiftToRight(3777, 6) ➞ 59

        shiftToRight(-512, 10) ➞ -1

    Pseudocode
        1. Recebe valores
        2. Função com recursividade, se y > 0 então 2 * function(x, y-1) se não retunr 2

*/

function shiftToRight(x, y) {
    return Math.floor(x / 2 ** y)
}

console.log(shiftToRight(-5, 1))

/*

    Recursive solution

    function shiftToRight(x, y) {
        return y > 0 ? shiftToRight(x / 2, y-1) : Math.floor(x)
    }

*/