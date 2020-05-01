//Collect od dnumbers in a list
function oddNumbers(list) {
    let odds = []

    function extractOdds(list) {
        if (list.length === 0) return
        if (list[0] % 2 !== 0) odds.push(list[0])
        extractOdds(list.slice(1))
    }
    extractOdds(list)

    return odds
}
console.log(oddNumbers([1, 2, 3, 4, 5]))