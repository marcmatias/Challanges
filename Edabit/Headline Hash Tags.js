/*

    PREP

    Parameters
        String phrase

    Returns
        Top 3 longest words in of string phrase

    Examples
        getHashTags("How the Avocado Became the Fruit of the Global Trade")
        ➞ ["#avocado", "#became", "#global"]

        getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
        ➞ ["#christmas", "#probably", "#will"]

        getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
        ➞ ["#surprise", "#parents", "#fruit"]

        getHashTags("Visualizing Science")
        ➞ ["#visualizing", "#science"]

    Pseudocode
        1. Receive string phrase with newspaper title
        2. Turn string into array checking length of words (not counting ponctuation)
        3. Ordenate words in descending order by length count
        4. If string phrase has less than 3 words ordenate words in descending order
        5. If multiple words tie the for same length retrieve the word that occurs first
        6. Turn words into hashtags
        7. Return an array with the words turned into hashtags in descending order

*/

function getHashTags(str) {
    const strDescendingArr = str.toLowerCase().match(/\w+/g).sort((a, b) => b.length - a.length).slice(0, 3);
    return strDescendingArr.map(x => "#" + x)
}

console.log(getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit"));


/*

    Best Solution

    const getHashTags = s => s.match(/\w+/g)
    .sort((a,b) => b.length - a.length).slice(0,3)
    .map(w => `#${w.toLowerCase()}`)


*/