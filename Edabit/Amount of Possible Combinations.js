
/*

    Amount of Possible Combinations
    https://edabit.com/challenge/Wk7ScSpAG4wLSqm8k

    PREP
        Parameters
            k = Quantidades de cartas puxadas, numero inteiro
            n = Quantidade de cartas do baralho, numero inteiro
        
        Returns
            result = Número inteiro representando combinações possíveis
        
        Exemplos
            combinations(52, 52) ➞ 1
            combinations(5, 52) ➞ 2598960
            combinations(10, 52) ➞ 15820024220
        
        Pseudocodigo
            1. Recebe k e n
            2. Calcula n! / (n - k)! !k

            Combination example: 9 card hands (Calc forumla)
            https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:prob-comb/x9e81a4f98389efdf:combinations/v/permutations-and-combinations-3

*/

const fact = n => n > 1 ? n * fact(n - 1) : 1
const combinations = (k, n) => Math.round(fact(n) / (fact(n - k) * fact(k)))

console.log(combinations(5, 52))