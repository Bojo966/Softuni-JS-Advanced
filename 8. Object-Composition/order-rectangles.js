function orderRectangles(inputRectangles) {
    let outputRectangles = []

    for (var index = 0; index < inputRectangles.length; index++) {
        var element = inputRectangles[index];

        outputRectangles.push({
            width: element[0],
            height: element[1],
            area: function() {
                return this.height * this.width
            },
            compareTo: function(other) {
                let compareResultCode = other.area() - this.area()
                if (compareResultCode === 0) {
                    compareResultCode = other.width - this.width
                }

                return compareResultCode
            }
        })
    }

    return outputRectangles.sort((a, b) => {
        return a.compareTo(b)
    })
}

console.log(orderRectangles([
    [10, 5],
    [3, 20],
    [5, 12]
]))