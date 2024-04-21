function christmasPreparation(input) {

    let paperCount = Number(input[0]);
    let rollsCount = Number(input[1]);
    let litres = Number(input[2]);
    let percent = Number(input[3]);

    let priceForPaper = paperCount * 5.8;
    let priceForRolls = rollsCount * 7.2;
    let priceForLitres = litres * 1.2;

    let totalPrice = priceForPaper + priceForRolls + priceForLitres;

    let percentCount = percent / 100;

    let discount = totalPrice * percentCount;
    let priceWithDiscount = totalPrice - discount;

    console.log(priceWithDiscount.toFixed(3));


}

christmasPreparation(["2",
    "3",
    "2.5",
    "25"]);