import { deal } from "../helper-function/help.js"
import deck from "../utils/deck.js"
import input from "analiza-sync"




function createPlayer(name="AI"){
    return {
        name,
        hand:[],
        wonPile:[]
    }
} 
export function initGame(){
    const name = input("Enter your name: ")
    const p1 = createPlayer()
    const p2 = createPlayer(name)
    const gameDeck = deck.shuffle(deck.createDeck())
    deal(gameDeck, p1.hand, p2.hand)
    return {
        deck: gameDeck,
        player_1 : p1,
        player_2 : p2
    }
}

export function playRound(p1, p2){
     
} 
