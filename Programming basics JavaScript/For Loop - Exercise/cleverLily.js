function cleverLily(input) {

    let age = Number(input[0]);
    let priceForDishwasher = Number(input[1]);
    let priceForToy = Number(input[2]);

    let sum = 0;
    let currentMoney = 10;
    let toyCounter = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sum += currentMoney;
            currentMoney += 10;
            sum--;
        } else {
            toyCounter++;
        }
    }

    sum += toyCounter * priceForToy;
    let diff = Math.abs(sum - priceForDishwasher);
    if (sum >= priceForDishwasher) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["10", "170.00", "6"]);
