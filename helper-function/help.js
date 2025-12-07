export const convertCharToNumber = (char) => {
    switch (char) {
        case "J":
            char = "11"
            break;
        case "Q":
            char = "12"
            break;
        case "K":
            char = "13"
            break;
        case "A":
            char = "14"
            break;    
    }
    return char
}

export const converNumerTochar = number =>{
        switch (number) {
        case 11:
            number = "J"
            break;
        case 12:
            number = "Q"
            break;
        case 13:
            number = "K"
            break;
        case 14:
            number = "A"
            break;      
    }
    return number
}

export const deal = (deck, p1, p2) => {
    p1.push(deck.slice(0, deck.length / 2))
    p2.push(deck.slice(deck.length / 2))
}