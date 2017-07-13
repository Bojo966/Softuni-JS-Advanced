function makeCard(face, suit) {
    let faces = {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        'J': 'J',
        'Q': 'Q',
        'K': 'K',
        'A': 'A'
    }

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (!faces.hasOwnProperty(face)) {
        throw new Error
    }

    if (!suits.hasOwnProperty(suit)) {
        throw new Error
    }

    return {
        face: face,
        suit: suit,
        toString: function() {
            return faces[face] + suits[suit]
        }
    }
}

console.log('' + makeCard('1', 'C'));