import { convertCharToNumber, converNumerToChar } from "../helper-function/help.js"

function createCard(rank, suite) {
    return {
        rank,
        suite,
        value: Number(convertCharToNumber(rank))
    }
}

function compareCards(p1Card, p2Card, playersObject) {
    if (p1Card.value > p2Card.value) {
        return playersObject.player1
    } else if (p1Card.value < p2Card.value) {
        return playersObject.player2
    } else {
        return "WAR"
    }
}

function createDeck() {
    const suitsDeck = ["H", "S", "D", "C"]
    const deck = []
    for (let i = 0; i < suitsDeck.length; i++) {
        for (let j = 2; j <= 14; j++) {
            deck.push(createCard(converNumerToChar(j), suitsDeck[i]))
        }
    }
    return deck
}
function shuffle(deck) {
    let shuffleTimes = 1000
    while (shuffleTimes > 0) {
        let num1 = Math.floor(Math.random() * deck.length);
        let num2 = Math.floor(Math.random() * deck.length);
        if (num1 !== num2) {
            [deck[num1], deck[num2]] = [deck[num2], deck[num1]]
            shuffleTimes--
        }
    }
    return deck
}
export default { shuffle, compareCards, createDeck }