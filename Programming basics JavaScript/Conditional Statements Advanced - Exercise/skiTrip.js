function skiTrip(input) {

    let daysForStay = Number(input[0]);
    let room = input[1];
    let grade = input[2];

    nights = daysForStay - 1;
    price = 0;


    if (room === "room for one person") {
        if (daysForStay < 10) {
            price = nights * 18;
        } else if (daysForStay >= 10 && daysForStay <= 15) {
            price = nights * 18;
        } else {
            price = nights * 18;
        }
    } else if (room === "apartment") {
        if (daysForStay < 10) {
            price = 25 * nights * 0.7;

        } else if (daysForStay >= 10 && daysForStay <= 15) {
            price = 25 * nights * 0.65;

        } else {
            price = 25 * nights * 0.5;

        }
    } else if (room === "president apartment") {
        if (daysForStay < 10) {
            price = 35 * nights * 0.9;

        } else if (daysForStay >= 10 && daysForStay <= 15) {
            price = 35 * nights * 0.85;

        } else {
            price = 35 * nights * 0.8;

        }
    }

    if (grade === "positive") {
        price += 0.25 * price;
    } else if (grade === "negative") {
        price -= 0.1 * price;
    }

    console.log((price.toFixed(2)));
}
skiTrip(["30",
    "president apartment",
    "negative"]);




