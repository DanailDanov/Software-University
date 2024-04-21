function basketballEquipment(input) {

    let yearFeeForBasketball = Number(input[0]);
    let priceForBasketballShoes = yearFeeForBasketball - (yearFeeForBasketball * 0.4);
    let priceForBasketballEquipment = priceForBasketballShoes - (priceForBasketballShoes * 0.2);
    let priceForBasketballBall = priceForBasketballEquipment / 4;
    let priceForBasketballAccessories = priceForBasketballBall / 5;

    let totalPriceForEquipment = yearFeeForBasketball + priceForBasketballShoes + priceForBasketballEquipment + priceForBasketballBall + priceForBasketballAccessories;

    console.log(totalPriceForEquipment);

}

basketballEquipment(["365 "]);
