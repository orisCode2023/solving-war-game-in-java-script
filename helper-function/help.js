
// const numbers={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}
// export const objSuites= {
//     14:"A",
//     13:"K",
//     12:"Q",
//     11:"J",
//     ...numbers

// }
export const convertCharToNumber = (char) => {
    switch (char) {
        case "J": char = "11"
            break;
        case "Q": char = "12"
            break;
        case "K": char = "13"
            break;
        case "A": char = "14"
            break;
    }
    return char
}
export const converNumerToChar = number => {
    switch (number) {
        case 11: number = "J"
            break;
        case 12: number = "Q"
            break;
        case 13: number = "K"
            break;
        case 14: number = "A"
            break;
    }
    return String(number)
}
export const deal = (deck, p1, p2) => {
    p1.push(...deck.slice(0, deck.length / 2))
    p2.push(...deck.slice(deck.length / 2))
}

export const playerWin = (player, card1, card2) => {
    player.push(card1, card2)
}

export const isNotEmty = (hand, pile) => hand.length > 0 && pile.hand > 0
export const reFillPile = (player) => player.hand.push(...player.wonPile)