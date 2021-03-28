
/*

    A Redundant Function
    https://edabit.com/challenge/hzxN9bAebBPNqdQto

    PREP
        Parameters
            string text
        
        Returns
            function and string
        
        Exampls
            const f1 = redundant("apple")
            f1() ➞ "apple"

            const f2 = redundant("pear")
            f2() ➞ "pear"

            const f3 = redundant("")
            f3() ➞ ""
        
        PseudoCode
            1. Receive string
            2. Return function () => string

*/


function redundant(str) {
    return () => str
}


/*

    Best Solution

    const redundant = str => () => str;

*/