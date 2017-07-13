function subSum(array, startIndex, endIndex) {
    if (typeof(array) == "Array") {
        return NaN
    }

    if (startIndex < 0) {
        startIndex = 0
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1
    }

    let sum = 0
    for (let index = startIndex; index <= endIndex; index++) {
        let element = array[index];
        let elementType = typeof(element)

        if (elementType !== "number") {
            return NaN
        }

        sum += element
    }

    return sum
}

console.log(subSum([10, 30, 40], 0, 2))