
/*

    Buggy Code (Part 5)
    https://edabit.com/challenge/4iCsexZgmDEMMxj46

*/

function printArray(number) {
    const newArray = [];

    for (let i = 1; i <= number; i++) {
        newArray.push(i);
    }

    return newArray;
}

console.log(printArray(3));