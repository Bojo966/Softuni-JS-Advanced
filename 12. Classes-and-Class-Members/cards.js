let defineCards = (function() {
    validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    validSuits = ['♠', '♥', '♦', '♣']

    class Card {

        constructor(face, suit) {
            if (validFaces.indexOf(face) === -1) {
                throw new Error
            }

            if (validSuits.indexOf(suit) === -1) {
                throw new Error
            }

            this.face = face;
            this.suit = suit;
        }

        set face(givenFace) {
            if (validFaces.indexOf(givenFace) === -1) {
                throw new Error
            }

            this._face = givenFace;
        }

        get face() {
            return this._face;
        }

        set suit(givenSuit) {
            if (validSuits.indexOf(givenSuit) === -1) {
                throw new Error
            }

            this._suit = givenSuit;
        }

        get suit() {
            return this._suit;
        }
    }

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())

let Suits = defineCards.Suits;
let Card = defineCards.Card;

let card = new Card("2", Suits.SPADES);