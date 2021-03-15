
/*

    Add up the Numbers from a Single Number
    https://edabit.com/challenge/4gzDuDkompAqujpRi

    Soluções simples são omelhor caminho

*/

const addUp = (n) => [...new Array(n)].map((x, y) => y + 1).reduce((x, y, z) => x + y)

// Exemplo chamda
console.log(addUp(4))


/*

Best solution

function addUp(num) {
  return (num * (num + 1))/2;
}

*/