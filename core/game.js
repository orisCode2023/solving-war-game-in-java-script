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
        if (result.warPile.length === 0){
            console.log(`${result.name}'s won pile is:`)
            console.log(result.wonPile)
        }
    } else {
        console.log(result)
        war(playersObject, card1, card2)
    }
}

function getCard(player){
    if (player.hand){
        const card = player.hand.pop()
        console.log(`${player.name} card is: ${card.rank} `)
        return card
    }
}

function war(playersObject, card1, card2) {
    let counter = 1
    const warLoopNumber = 4
    while (counter <= warLoopNumber) {
        playersObject.player1.warPile.push(card1)
        playersObject.player2.warPile.push(card2)
        card1 = getCard(playersObject.player1)
        card2 = getCard(playersObject.player2)
        
        if (counter === warLoopNumber) {
            const result = deck.compareCards(card1, card2, playersObject)
            if (result === "WAR") {
                console.log("WAR AGAIN")
                counter = 0
            } else {
                checkResult(result, "warPile", card1, card2, playersObject)
                const loserPile = Object.values(playersObject).find((player) => player.name !== result.name && !Array.isArray(player));
                result.warPile.push(...loserPile.warPile)
                result.wonPile.push(...result.warPile)
                console.log(`${result.name}'s win pile is: `)
                console.log(result.wonPile)
            }   
        }
        counter++
    }
}

function playRound(playersObject) {
    const card1 = getCard(playersObject.player1)
    const card2 = getCard(playersObject.player2)
    const result = deck.compareCards(card1, card2, playersObject)
    checkResult(result, "wonPile", card1, card2, playersObject)
}
const game = initGame()


// export function gameLoop(game) {
//     while (isNotEmty(p1.hand, p1.wonPile) || isNotEmty(p2.hand, p2.wonPile)) {
//         playRound(game)
//     }
// }
 


// TODO:  needs to fix extra insertion when double war happend