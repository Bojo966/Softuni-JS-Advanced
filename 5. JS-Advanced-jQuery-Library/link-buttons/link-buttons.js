function attachEvents() {
    let buttons = $('.button')

    for (var index = 0; index < buttons.length; index++) {
        let button = buttons[index];
        $(button).click(buttonClick)
    }

    function buttonClick(event) {
        let clickedButton = $(this)

        let buttons = $('.button')

        for (var index = 0; index < buttons.length; index++) {
            let button = buttons[index];
            $(button).removeClass('selected')
        }

        clickedButton.addClass('selected')
    }
}