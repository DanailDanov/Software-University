function requiredReading(pages, readOneHour, days) {

    let totalTime = pages / readOneHour;
    let hoursPerDay = totalTime / days;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
