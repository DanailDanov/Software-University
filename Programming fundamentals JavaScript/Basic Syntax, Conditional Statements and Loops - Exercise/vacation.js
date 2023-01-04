function syntaxDemo(people, groupType, dayOfWeek) {
    
    let totalPrice = 0;

    switch (groupType) {
        case "Students":
            if (dayOfWeek === "Friday") {
                totalPrice = people * 8.45;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = people * 9.8;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = people * 10.46;
            }

            if (people >= 30) {
                totalPrice = totalPrice * 0.85;
            }

            break;
        case "Business":
            if (people >= 100) {
                people -= 10;
            }

            if (dayOfWeek === "Friday") {
                totalPrice = people * 10.9;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = people * 15.6;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = people * 16;
            }
            break;
        case "Regular":
            if (dayOfWeek === "Friday") {
                totalPrice = people * 15;
            } else if (dayOfWeek === "Saturday") {
                totalPrice = people * 20;
            } else if (dayOfWeek === "Sunday") {
                totalPrice = people * 22.5;
            }

            if (people >= 10 && people <= 20) {
                totalPrice *= 0.95;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
