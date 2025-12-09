import { deal, isNotEmty, playerWin } from "../helper-function/help.js"
import deck from "../utils/deck.js"
// import input from "analiza-sync"




function createPlayer(name = "AI") {
    return {
        name,
        hand: [],
        wonPile: []
    }
}
export function initGame() {
    // const name = input("Enter your name: ")
    const name = "David"
    const p1 = createPlayer()
    const p2 = createPlayer(name)
    const gameDeck = deck.shuffle(deck.createDeck())
    deal(gameDeck, p1.hand, p2.hand)
    return {
        deck: gameDeck,
        player1: p1,
        player2: p2
    }
}

function checkResult(result, card1, card2, playersObject) {
    if (typeof result === "object") {
        console.log(`${result.name}'s card is higher `)
        playerWin(result.wonPile, card1, card2)
        console.log(`${result.name}'s won pile is:`)
        console.log(result.wonPile)
    } else {
        console.log(result)
        war(playersObject, card1, card2)
    }
}

function war(playersObject, card1, card2) {
    let counter = 0
    const p1WarPile = []
    const p2WarPile = []
    p1WarPile.push(card1)
    p2WarPile.push(card2)
    while (counter <= 3) {
        if (p1.hand){
            card1 = p1.hand.pop()
            p1WarPile.push(card1)
        } 
        if (p2.hand){
            card2 = p2.hand.pop()
            p2WarPile.push(card2)
        }
        counter++
        const resultRound = deck.compareCards(card1, card2)
        if (counter === 3 && resultRound === "WAR") {
            counter = 0
        } else {
            checkResult(resultRound, card1, card2, playersObject)
        }
    }
}




function playRound(playersObject) {
    let card1;
    let card2;
    if (playersObject.player1.hand) {
        card1 = playersObject.player1.hand.pop()
    }
    if (playersObject.player2.hand) {
        card2 = playersObject.player2.hand.pop()
    }
    console.log(`${playersObject.player1.name} card is: ${card1.rank} `)
    console.log(`${playersObject.player2.name} card is: ${card2.rank} `)
    const result = deck.compareCards(card1, card2, playersObject)
    checkResult(result, card1, card2, playersObject)
}
const game = initGame()
playRound(game)


// export function gameLoop() {
//     while (isNotEmty(p1.hand, p1.wonPile) || isNotEmty(p2.hand, p2.wonPile)) {
//         break
//     }
// }