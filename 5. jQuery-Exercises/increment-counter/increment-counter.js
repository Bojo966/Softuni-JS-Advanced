function increment(selector) {
    let selection = $(selector)
    let textAreaElement = getTextAreaElement()
    let firstButtonElement = getFirstButtonElement()
    let secondButtonElement = getSecondButtonElement()
    let unorderdListElement = getUnorderedListElement()

    selection.append(textAreaElement)
    selection.append(firstButtonElement)
    selection.append(secondButtonElement)
    selection.append(unorderdListElement)

    function getFirstButtonElement() {
        let buttonElement = $('<button>')
        buttonElement.addClass('btn')
        buttonElement.attr('id', 'incrementBtn')
        buttonElement.text('Increment')
        buttonElement.click(incrementValue)

        return buttonElement
    }

    function getSecondButtonElement() {
        let buttonElement = $('<button>')
        buttonElement.addClass('btn')
        buttonElement.attr('id', 'addBtn')
        buttonElement.text('Add')
        buttonElement.click(add)

        return buttonElement
    }

    function getUnorderedListElement() {
        let ulElement = $('<ul>')
        ulElement.addClass('results')

        return ulElement
    }

    function getTextAreaElement() {
        let textAreaElement = $('<textarea>')
        textAreaElement.addClass('counter')
        textAreaElement.val(0)
        textAreaElement.attr('disabled', 'disabled')
        return textAreaElement
    }

    function incrementValue() {
        let inputValue = $('.counter').val()
        inputValue = Number(inputValue)
        $('.counter').val(inputValue + 1)
    }

    function add() {
        let inputValue = $('.counter').val()
        let ulElement = $('.results')
        let listItemElement = $('<li>')
        listItemElement.text(inputValue)
        ulElement.append(listItemElement)
    }
}