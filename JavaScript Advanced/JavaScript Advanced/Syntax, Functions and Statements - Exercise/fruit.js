function fruit(typeOfFruit, weightInGrams, priceForKg) {

    const weightInKg = weightInGrams / 1000;
    const finalPrice = weightInKg * priceForKg;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);

}

fruit('orange', 2500, 1.80);