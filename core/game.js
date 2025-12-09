import { deal, isNotEmty, playerWin } from "../helper-function/help.js"
import deck from "../utils/deck.js"
// import input from "analiza-sync"


function createPlayer(name = "AI") {
    return {
        name,
        hand: [],
        wonPile: [],
        warPile: []
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

function checkResult(result, pile, card1, card2, playersObject,) {
    if (typeof result === "object") {
        console.log(`${result.name}'s card is higher `)
        playerWin(result, pile,  card1, card2)
        console.log(`${result.name}'s won pile is:`)
        console.log(result.wonPile)
    } else {
        console.log(result)
        war(playersObject, card1, card2)
    }
}

// function getCardWar(player){
//     if (player.hand){
//         const card = player.hand.pop() // card needs to be an object
//         console.log(`${player.name} card is: ${card.rank} `)
//         return card
//     }
// }

function war(playersObject, card1, card2) {
    let counter = 0
    while (counter <= 3) {
        playersObject.player1.warPile.push(card1)
        playersObject.player2.warPile.push(card2)
        if (playersObject.player1.hand) {
            card1 = playersObject.player1.hand.pop()
            console.log(`${playersObject.player1.name} card on ${counter} round is: ${card1.rank} `)
        }
        if (playersObject.player2.hand) {
            card2 = playersObject.player2.hand.pop()
            console.log(`${playersObject.player2.name} card on ${counter} round is: ${card2.rank} `)
        }
        if (counter === 3) {
            const result = deck.compareCards(card1, card2, playersObject)
            if (result === "WAR") {
                console.log("WAR AGAIN")
                counter = 0
            } else {
                checkResult(result, "warPile", card1, card2, playersObject)
                result.wonPile.push(...playersObject.player1.warPile, ...playersObject.player2.warPile)
                console.log(`${result.name}'s war pile is: `)
                console.log(result.wonPile)
            }   
        }
        counter++
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
    checkResult(result, "wonPile", card1, card2, playersObject)
}
const game = initGame()
playRound(game)

// export function gameLoop() {
//     while (isNotEmty(p1.hand, p1.wonPile) || isNotEmty(p2.hand, p2.wonPile)) {
//         break
//     }
// }