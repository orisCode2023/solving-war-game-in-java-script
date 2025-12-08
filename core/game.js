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
        player_1: p1,
        player_2: p2
    }
}

function checkResult(result, p1, p2, card1, card2) {
    if (result === "p1") {
        playerWin(p1.wonPile, card1, card2)
        console.log(p1.wonPile)
    } else if (result === "p2") {
        playerWin(p2.wonPile, card1, card2)
        console.log(p1.wonPile)
    }
}
//     } else {
//         war(p1, p2, card1, card2)
//     }
// }

// function war(p1, p2, card1, card2) {
//     let counter = 0
//     const p1WarPile = []
//     const p2WarPile = []
//     p1WarPile.push(card1)
//     p2WarPile.push(card2)
//     while (counter <= 3) {
//         if (p1.hand){
//             card1 = p1.hand.pop()
//             p1WarPile.push(card1)
//         } 
//         if (p2.hand){
//             card2 = p2.hand.pop()
//             p2WarPile.push(card2)
//         }
//         counter++
//         const resultRound = deck.compareCards(card1, card2)
//         if (counter === 3 && resultRound === "WAR") {
//             counter = 0
//         } else {
//             checkResult(resultRound, p1, p2, card1, card2)
//         }
//     }
// }



function playRound(p1, p2) {
    let p1Card;
    let p2Card;
    if (p1.hand){
        p1Card = p1.hand.pop()
    }
    if (p2.hand){
        p2Card = p2.hand.pop()
    }
    console.log(`${p1.name} card is: ${p1Card.value} `)
    console.log(`${p2.name} card is: ${p2Card.value} `)
    let resultRound = deck.compareCards(p1Card, p2Card)
    console.log(resultRound)
    checkResult(resultRound, p1, p2, p1Card, p2Card)
}
const game = initGame()
playRound(game.player_1, game.player_2)


// export function gameLoop() {
//     while (isNotEmty(p1.hand, p1.wonPile) || isNotEmty(p2.hand, p2.wonPile)) {
//         break
//     }
// }