function isThere(arr, value) {
    if (arr.length === 0) return -1

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === value) return i
    }
    return -1
}

console.log(isThere([1, 2, 3, 3, 6, 7, 8], 0))