/*

    Verbos Regulares
    https://edabit.com/challenge/QGvL9nFnn2PJwRgyp

    PREP
        Parameters
            String with a spanish verb

        Returns
            String with all verb conjugation

        Examples
            espVerb("pasar") ➞ "Yo paso, tú pasas, él pasa, nosotros pasamos, vosotros pasáis, ellos pasan."

            espVerb("correr") ➞ "Yo corro, tú corres, él corre, nosotros corremos, vosotros corréis, ellos corren."
            
            espVerb("unir") ➞ "Yo uno, tú unes, él une, nosotros unimos, vosotros unís, ellos unen."

        PseudoCode
            1. Receive a verb in string type
            2. Check if it ends with ar, er or ir
            3. Remove the end of the verb and add conjugations ends
            4. Return all the phrase with the verbs conjugations

*/

const ar = ["o", "as", "a", "amos", "áis", "an"]
const er = ["o", "es", "e", "emos", "éis", "en"]
const ir = ["o", "es", "e", "imos", "ís", "en"]

function espVerb(verb) {
    const verbEnd = verb.slice(-2);
    const verbStart = verb.slice(0, -2);
    const conj = verbEnd === "ar" ? [...ar] : verbEnd === "er" ? [...er] : verbEnd === "ir" ? [...ir] : null
    return ("Yo " + verbStart + conj.shift() + ", tú " + verbStart + conj.shift() + ", él " +
        verbStart + conj.shift() + ", nosotros " + verbStart + conj.shift() + ", vosotros " +
        verbStart + conj.shift() + ", ellos " + verbStart + conj.shift()) + "."
}

console.log(espVerb("pasar"))