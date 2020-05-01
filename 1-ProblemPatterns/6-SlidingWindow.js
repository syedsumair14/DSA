function maxSum(arr, number) {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < number; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}

maxSum([1, 2, 3, 9, 12], 2)