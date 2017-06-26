function aggregate(numbers) {
    let sum = reduce(numbers.slice(), function(a, b) {
        return a + b
    })

    let min = reduce(numbers.slice(), function(a, b) {
        return Math.min(a, b)
    })

    let max = reduce(numbers.slice(), function(a, b) {
        return Math.max(a, b)
    })

    let product = reduce(numbers.slice(), function(a, b) {
        return a * b
    })

    let join = reduce(numbers.slice(), function(a, b) {
        return a + '' + b
    })

    console.log(`Sum = ${sum}`)
    console.log(`Min = ${min}`)
    console.log(`Max = ${max}`)
    console.log(`Product = ${product}`)
    console.log(`Join = ${join}`)

    function reduce(array, func) {
        let result = array[0]
        for (let nextElement of array.slice(1)) {
            result = func(result, nextElement)
        }

        return result
    }
}

aggregate([5, 10, 15])