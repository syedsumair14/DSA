function flatten(arr) {
    let flatArray = []
    for (let element of arr) {
        if (Array.isArray(element)) {
            flatArray = flatArray.concat(flatten(element))
        } else {
            flatArray.push(element)
        }
    }

    return flatArray
}

console.log(flatten([1, 2, [1, [1, 2, 3, [1]]]]))