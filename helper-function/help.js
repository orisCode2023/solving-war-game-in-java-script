
const numbers={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}
export const objSuites= {
    14:"A",
    13:"K",
    12:"Q",
    11:"J",
    ...numbers

}
export const deal = (deck, p1, p2) => {
    p1.push(deck.slice(0, deck.length / 2))
    p2.push(deck.slice(deck.length / 2))
}