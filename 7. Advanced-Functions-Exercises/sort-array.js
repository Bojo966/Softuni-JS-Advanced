function sortArray(inputNumbers, order) {
    if (order === 'asc')
        return inputNumbers.sort((a, b) => {
            return a - b
        })
    else
        return inputNumbers.sort((a, b) => {
            return b - a
        })
}

sortArray([14, 7, 17, 6, 8], 'asc')