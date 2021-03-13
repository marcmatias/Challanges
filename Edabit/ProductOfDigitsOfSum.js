/* 
    Product of Digits of Sum
    https://edabit.com/challenge/Kzmyf4pLx66ZRsnWk 
*/

const sumDigProd = (...numbers) => {
    let result = numbers.reduce((x, y) => x + y);
    while (result.toString().length > 1) result = Array.from(result.toString()).map(Number).reduce((x, y) => x * y)
    return result
}

// Example print
console.log(sumDigProd(16, 28));