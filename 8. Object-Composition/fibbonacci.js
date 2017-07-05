function fibbonacciNumbers(inputNumber) {
    if (inputNumber == 1) {
        return [1]
    }

    let fibbonnacciNumbers = [1, 1]
    let currentFibbonacciNumber = 2

    while (currentFibbonacciNumber < inputNumber) {
        let currentNumber = fibbonnacciNumbers[fibbonnacciNumbers.length - 1]
        let previousNumber = fibbonnacciNumbers[fibbonnacciNumbers.length - 2]
        fibbonnacciNumbers.push(currentNumber + previousNumber)
        currentFibbonacciNumber++
    }

    return fibbonnacciNumbers
}

console.log(fibbonacciNumbers(5))