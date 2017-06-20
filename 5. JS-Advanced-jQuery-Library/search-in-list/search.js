function search() {
    let searchText = $('#searchText')[0].value

    let list = $('#towns')[0]

    let countOfMatches = 0
    let listItems = list.children
    for (let index = 0; index < listItems.length; index++) {
        let listItem = listItems[index];
        let listItemText = String(listItem.textContent)
        listItem.style['font-weight'] = ['none']

        if (listItemText.indexOf(searchText) !== -1) {
            listItem.style['font-weight'] = ['bold']
            countOfMatches++
        }
    }

    $('#result')[0].textContent = `${countOfMatches} matches found`
}