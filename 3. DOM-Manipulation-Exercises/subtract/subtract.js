function subtract() {
    let firstNumber = Number(document.getElementById('firstNumber'))
    let secondNumber = Number(document.getElementById('secondNumber'))

    let result = firstNumber - secondNumber
    document.getElementById('result').textContent = result
}