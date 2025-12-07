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
