function attachEvents() {
    let list = $('#items')[0]
    let listItems = list.children

    for (var index = 0; index < listItems.length; index++) {
        var element = listItems[index];
        $(element).click(clickedElement)
    }

    function clickedElement(event) {
        let clickedListItem = $(this)
        clickedListItem.css('background-color', '#DDD')
    }
}