function extractText() {
    let list = $('#items')[0]

    let listEntries = []

    let listItems = list.children

    for (var index = 0; index < listItems.length; index++) {
        var listItem = listItems[index];
        listEntries.push(listItem.textContent)

    }

    let result = $('#result')[0]

    result.textContent = listEntries.join(', ')
}