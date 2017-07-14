function ticketing(ticketsStrings, sortingOrder) {
    let tickets = []
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    ticketsStrings.forEach(function(ticketString) {
        let ticketData = ticketString.split('|')
        tickets.push(new Ticket(ticketData[0], ticketData[1], ticketData[2]))
    }, this);

    if (sortingOrder === 'destination') {
        tickets = tickets.sort((a, b) => {
            return a.destination.localeCompare(b.destination)
        })
    } else if (sortingOrder === 'price') {
        tickets = tickets.sort((a, b) => {
            return a.price - b.price
        })
    } else if (sortingOrder === 'status') {
        tickets = tickets.sort((a, b) => {
            return a.status.localeCompare(b.status)
        })
    } else {
        throw new Error
    }

    return tickets
}

console.log(ticketing(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
))