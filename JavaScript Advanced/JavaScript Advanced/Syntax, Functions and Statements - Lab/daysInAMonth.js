function daysInAMonth(month, year) {

    let date = new Date();

    date.setMonth(month);
    date.setDate(0);

    console.log(date.getDate());
}

daysInAMonth(1, 2021);