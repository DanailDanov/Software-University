function puppyCare(input) {

    let index = 0;
    let dogFoodInKg = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let sum = 0;
    let foodInGrams = 0;

    while (command !== "Adopted") {

        let eatingFoodPerDay = Number(command);

        foodInGrams = dogFoodInKg * 1000;
        sum += eatingFoodPerDay;

        command = input[index];
        index++;
    }

    let diff = Math.abs(foodInGrams - sum);

    if (sum <= foodInGrams) {
        console.log(`Food is enough! Leftovers: ${diff} grams.`);
    } else {
        console.log(`Food is not enough. You need ${diff} grams more.`);
    }


}

puppyCare(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"]);