function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) return false
    let frequencyCounterOne = {}
    let frequencyCounterTwo = {}

    for (let val of array1) {
        frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1
    }
    for (let val of array2) {
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1
    }
    for (key in frequencyCounterOne) {
        if (!(key ** 2 in frequencyCounterTwo)) {
            return false
        }
        if (frequencyCounterTwo[key ** 2] !== frequencyCounterOne[key]) {
            return false
        }
    }
    return true
}

console.log(areArraysSame([2, 4, 5, 10, 2], [4, 25, 4, 100, 16]))