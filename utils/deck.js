import { converNumerTochar, convertCharToNumber } from "../helper function/help.js"

function createCard(rank, suite) {
    return {
        rank,
        suite,
        value: Number(convertCharToNumber(rank))
    }
}

function compareCards(p1Card, p2Card) {
    if (p1Card.value > p2Card.value) {
        return "p1"
    } else if (p1Card.value < p2Card.value) {
        return "p2"
    } else {
        return "WAR"
    }
}

function createDeck() {
    const suitsDeck = ["H", "S", "D", "C"]
    const deck = []
    for (let i = 0; i < suitsDeck.length; i++){
        for (let j = 2; j <= 14; j++){
            deck.push(createCard(converNumerTochar(j), suitsDeck[i]))
        }
    } 
    return deck
}


function shuffle(deck) {
    return [Object]
}