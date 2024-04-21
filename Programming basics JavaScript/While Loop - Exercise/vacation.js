function vacation(input) {

    let index = 0;
    let moneyForTrip = Number(input[index]);
    index++;
    let amountMoney = Number(input[index]);
    index++;

    let daysCounter = 0;
    let spendCounter = 0;

    while (amountMoney < moneyForTrip) {

        let different = input[index];
        index++;
        let moneySaveOrSpend = Number(input[index]);
        index++;
        daysCounter++;
        switch (different) {
            case "spend":
                amountMoney -= moneySaveOrSpend;
                spendCounter++;
                if (amountMoney < 0) {
                    amountMoney = 0;
                }

                break;
            case "save":
                amountMoney += moneySaveOrSpend
                spendCounter = 0;
                break;

        }

        if (spendCounter === 5) {
            break;
        }

    }

    if (spendCounter === 5) {
        console.log("You can't save the money.");
        console.log(daysCounter)
    } else {
        console.log(`You saved the money for ${daysCounter} days.`)
    }



}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"]);

