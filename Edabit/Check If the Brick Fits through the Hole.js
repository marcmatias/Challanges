/*

    Check If the Brick Fits through the Hole

    PREP
        Parameters
            Integers: height(a), width(b) and depth(c), width(w) and height(h)

        Returns
            Boolean true or false

        Examples
            doesBrickFit(1, 1, 1, 1, 1) ➞ true

            doesBrickFit(1, 2, 1, 1, 1) ➞ true

            doesBrickFit(1, 2, 2, 1, 1) ➞ false

        PseudoCode
            1. Recebe os valores inteiros do tijolo e do espaço em que será testado se ele cabe ou não
            2. Testa se o tamanho do tijolo é igual o menor ao do espaço em que será adicionado
                (o tijolo pode ser rotacionado em angulos retos)

        Nesse caso ter buscado se existe uma formula matemática simples é muito mais eficiente que encontrar
        o resultado através de várias funções e condicionais.

*/

function doesBrickFit(a, b, c, w, h) {
    return [a, b, c].sort((z, w) => z - w).slice(0, 2).every((x, i) => x <= [w, h].sort((z, w) => z - w)[i]);
}

console.log(doesBrickFit(1, 2, 2, 1, 2))

/*

    Best solution

    function doesBrickFit(a,b,c, w,h) {
        return [a*b, a*c, b*c].some(el => el <= w*h)
    }

*/