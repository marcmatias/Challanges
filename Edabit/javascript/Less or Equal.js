/*

    Less or Equal
    https://edabit.com/challenge/4AY5rGSq6n3had3wY


    PREP
        Parameters
            One arr Array with positive integers and one k positive integer
        
        Returns
            Integer or null
        
        Examples
            lessEqual([3, 7, 6, 1, 10, 3, 20], 4) ➞ 6
            // 1, 3, 3, 6 = 4 elements    
            lessEqual([3, 7, 6, 1, 10, 3, 20], 2) ➞ null
            // 1, 3 = 2 elements
        
        Pseudocodigo
            1. Receber arr e K
            2. Buscar no arr o menor positivo inteiro X em que exatamente K elementos do arr recebido é menor ou igual a X
            3. Se o ultimo número do array tiver outra repetição dentro do array não será necessário contar com todas as repetiçòes
                Se arr[k] for igual ao ultimo numero obtido em um arr.sort((a,b) => a - b)[k - 1] então o retorno deve ser null pois o menor numero com K elementos
                menores que ele no array não existe
            4. Return X se ele existir, ou null se não
*/



const lessEqual = (arr, k) => {
    const res = arr.sort((a, b) => a - b)
    return k === 0 && res[0] === 1 ? null : k === 0 ? 1 : res[k - 1] != res[k] ? res[k - 1] : null
}

console.log(lessEqual([1], 0))