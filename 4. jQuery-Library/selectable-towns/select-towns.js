function attachEvents() {
    let selectedItems = []
    let list = $('#items')[0]
    let listItems = list.children
    let shown = false

    for (var index = 0; index < listItems.length; index++) {
        var element = listItems[index];
        $(element).click(clickedElement)
    }

    $('#showTownsButton').click(showSelected)

    function clickedElement(event) {
        let clickedListItem = $(this)
        let clickedElementText = clickedListItem.text()
        let clickedElementColor = clickedListItem.css('background-color')
        if (clickedListItem.css('background-color') === 'rgba(0, 0, 0, 0)' ||
            clickedListItem.css('background-color') === 'rgb(255, 255, 255)') {
            selectedItems.push(clickedElementText)
            clickedListItem.css('background-color', '#DDD')
        } else {
            delete selectedItems[selectedItems.indexOf(clickedListItem.text())]
            clickedListItem.css('background-color', '#FFF')
        }

        selectedItems = selectedItems.filter(function(value, index, arrray) {
            if (value === undefined) {
                return false
            } else {
                return true
            }
        })

        if (shown) {
            showSelected()
        }
    }

    function showSelected() {
        let selectedTownsElement = $('#selectedTowns')[0]
        selectedTownsElement.textContent = `Selected towns: ${selectedItems.join(', ')}`
        shown = true
    }
}