import { convertCharToNumber } from "../helper function/help.js"

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
    return [Object]
}

function shuffle(deck) {
    return [Object]
}