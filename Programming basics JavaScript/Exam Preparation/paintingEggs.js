function paintingEggs(input) {

    let sizeOfEggs = input[0];
    let colorOFEggs = input[1];
    let count = Number(input[2]);
    let totalPrice = 0
    switch (sizeOfEggs) {
        case "Large":
            if (colorOFEggs === "Red") {
                let price = count * 16;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else if (colorOFEggs === "Green") {
                let price = count * 12;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else {
                let price = count * 9;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            }

            break;
        case "Medium":
            if (colorOFEggs === "Red") {
                let price = count * 13;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else if (colorOFEggs === "Green") {
                let price = count * 9;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else {
                let price = count * 7;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            }
            break;
        case "Small":
            if (colorOFEggs === "Red") {
                let price = count * 9;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else if (colorOFEggs === "Green") {
                let price = count * 8;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            } else {
                let price = count * 5;
                let expenses = price * 0.35;
                totalPrice = price - expenses;
            }
            break;

    }

    console.log(`${totalPrice.toFixed(2)} leva.`);
}

paintingEggs(["Small",
    "Yellow",
    "3"]);
