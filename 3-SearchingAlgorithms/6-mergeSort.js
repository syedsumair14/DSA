// //Merging logic
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, midPoint));
    let rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf, rightHalf);
}

let print = mergeSort([1, 3, 98, 73, 4, 5])
console.log(print)


