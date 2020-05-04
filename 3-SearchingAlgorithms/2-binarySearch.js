function binaryIsThere(arr, val) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1
    let middlePointer = Math.floor((rightPointer + leftPointer) / 2)

    while (arr[middlePointer] !== val && leftPointer <= rightPointer) {
        if (val < arr[middlePointer]) rightPointer = middlePointer - 1
        else leftPointer = middlePointer + 1
        middlePointer = Math.floor((rightPointer + leftPointer) / 2)
    }

    if (arr[middlePointer] === val) return middlePointer
    return -1
}

console.log(binaryIsThere([1, 2, 3, 4, 5, 6, 7, 10, 14, 15, 21, 22], 11))