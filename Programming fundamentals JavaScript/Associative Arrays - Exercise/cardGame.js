function cardGame(input) {

    let colors = { "C": 1, "D": 2, "H": 3, "S": 4 };
    let powers = {
        "1": 10, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
        "J": 11, "Q": 12, "K": 13, "A": 14,
    };

    let gameWithCard = {};

    for (const line of input) {

        let [namePlayer, powerAndTypeCard] = line.split(": ");
        powerAndTypeCard = powerAndTypeCard.split(", ");

        if (!gameWithCard.hasOwnProperty(namePlayer)) {
            gameWithCard[namePlayer] = new Set;
        }

        for (const card of powerAndTypeCard) {
            gameWithCard[namePlayer].add(card);
        }
    }

    for (const [player, cards] of Object.entries(gameWithCard)) {
        let cardsPower = 0;
        for (const card of cards) {
            let power = powers[card[0]];
            let color = colors[card.slice(-1)];
            cardsPower += power * color;
        }

        console.log(`${player}: ${cardsPower}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']);