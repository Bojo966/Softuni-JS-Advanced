/// <reference path="../../node_modules/@types/jquery/index.d.ts" />

function calendar([day, month, year]) {
    let givenDate = new Date(year, month - 1, 1)
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

    let contentWrapper = $('#content')
    contentWrapper
        .append($('<table>')
            .append($('<caption>')
                .text(`${months[month - 1].toUpperCase()} ${year}`)
            ).append($('<tbody>')
                .append(() => {
                    let headerRow = $('<tr>')
                    daysOfWeek.forEach(function(element) {
                        headerRow
                            .append($('<th>').text(element))
                    }, this);

                    return headerRow
                })
            )
        )

    console.log(givenDate)
}