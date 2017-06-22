function addItem() {
    let optionText = document.getElementById('newItemText').value
    let optionValue = document.getElementById('newItemValue').value

    let optionElement = document.createElement('option')
    optionElement.value = optionValue
    optionElement.text = optionText

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''

    let selectElement = document.getElementById('menu')
    selectElement.appendChild(optionElement)
}