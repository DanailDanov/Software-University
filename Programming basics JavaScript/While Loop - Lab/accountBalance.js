function accountBalance(input) {

    let index = 0;
    let sum = input[index];

    sumCounter = 0;

    while (sum !== "NoMoreMoney") {

        let inputAsNumber = Number(sum);
        if (inputAsNumber < 0) {
            console.log("Invalid operation!");
            break;
        }

        sumCounter += inputAsNumber;
        console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
        index++;
        sum = input[index];
        

    }

    console.log(`Total: ${sumCounter.toFixed(2)}`);

}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);