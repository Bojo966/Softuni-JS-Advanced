function initializeTable() {
    function createTableRow() {
        let newCountryName = $('#newCountryText').val()
        let newCapitalName = $('#newCapitalText').val()

        let newCountryNameTd = $('<td>')
        newCountryNameTd.text(newCountryName)

        let newCapitalNameTd = $('<td>')
        newCapitalNameTd.text(newCapitalName)

        let upAnchor = $('<a>')
        upAnchor.attr('href', '#')
        upAnchor.text('[Up]')
        upAnchor.click(moveUp)

        let downAnchor = $('<a>')
        downAnchor.attr('href', '#')
        downAnchor.text('[Down]')
        downAnchor.click(moveDown)

        let deleteAnchor = $('<a>')
        deleteAnchor.attr('href', '#')
        deleteAnchor.text('[Delete]')
        deleteAnchor.click(deleteRow)

        let actionTd = $('<td>')
        $(actionTd).append(upAnchor)
        $(actionTd).append(downAnchor)
        $(actionTd).append(deleteAnchor)

        let newTableRow = $('<tr>')
        newTableRow.append(newCountryNameTd)
        newTableRow.append(newCapitalNameTd)
        newTableRow.append(actionTd)
        newTableRow.css('display', 'none')

        let table = $('#countriesTable').append(newTableRow)

        newTableRow.fadeIn()
    }

    function moveUp(event) {
        let row = $(this).parent().parent()
        let previousRow = $(row).prev()
        previousRow.insertAfter(row)
    }

    function moveDown(event) {
        let row = $(this).parent().parent()
        let nextRow = row.next()
        nextRow.insertBefore(row)
    }

    function deleteRow(event) {
        let row = $(this).parent().parent()
        row.detach()
    }

    let linkElement = $('#createLink')
    linkElement.click(createTableRow)
}