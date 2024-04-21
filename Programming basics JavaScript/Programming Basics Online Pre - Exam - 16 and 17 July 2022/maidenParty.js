function maidenParty(input) {

    let priceForParty = Number(input[0]);
    let loveCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let keyCount = Number(input[3]);
    let carikatursCount = Number(input[4]);
    let luckCount = Number(input[5]);

    let discount = 0;

    let sumOfAll = loveCount * 0.60 + rosesCount * 7.20 + keyCount * 3.60 + carikatursCount * 18.20 + luckCount * 22;
    let articulCount = loveCount + rosesCount + keyCount + carikatursCount + luckCount;

    if (articulCount >= 25) {
        discount = sumOfAll - (sumOfAll * 0.35);
    }

    let newDiscount = discount - (discount * 0.1);
    let finalPrice = Math.abs(newDiscount - priceForParty);
   
    if (newDiscount >= priceForParty) {
        console.log(`Yes! ${finalPrice.toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${finalPrice.toFixed(2)} lv needed.`);
    }
}

maidenParty(["40.8",
    "20",
    "25",
    "30",
    "50",
    "10"]);