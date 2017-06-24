/// <reference path="E:\js-core\Softuni-JS-Advanced\node_modules\@types\jquery\index.d.ts" />

function createBook(selector, titleOfBook, authorOfBook, ISBN) {
    let numberOfBooks = $(`div[class^='book']`).length

    $(selector).append(
        $('<div>')
        .addClass(`book${numberOfBooks + 1}`)
        .append($('<p>').addClass('title').text(titleOfBook))
        .append($('<p>').addClass('author').text(authorOfBook))
        .append($('<p>').addClass('isbn').text(ISBN))
        .append($('<button>').text('Select').click(selectBook))
        .append($('<button>').text('Deselect').click(deselectBook)))

    function selectBook() {
        $($(this).parent()).css('border', '2px solid blue')
    }

    function deselectBook() {
        console.log('HGIT')
        $($(this).parent()).css('border', 'none')
    }
}