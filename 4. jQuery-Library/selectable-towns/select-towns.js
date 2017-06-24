function attachEvents() {
    let selectedItems = []
    $('#items li').on('click', clickedElement)
    $('#showTownsButton').on('click', showSelected)

    function clickedElement() {
        let clickedListItem = $(this)
        let clickedElementText = clickedListItem.text()
        let clickedElementColor = clickedListItem.css('background-color')
        if (!clickedListItem.attr('data-selected')) {
            selectedItems.push(clickedElementText)
            clickedListItem.attr('data-selected', 'true')
            clickedListItem.css('background-color', '#DDD')
        } else {
            clickedListItem.removeAttr('data-selected')
            delete selectedItems[selectedItems.indexOf(clickedListItem.text())]
            clickedListItem.css('background-color', '#FFF')
        }

        selectedItems = selectedItems.filter(function(value, index, array) {
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
        let selectedTownsElement = $('#selectedTowns')
        selectedTownsElement.text(`Selected towns: ${selectedItems.join(', ')}`)
        shown = true
    }
}