function previousDay(year, month, date) {

    let now = new Date(year, month - 1, date)

    let setDate = now.setDate(date - 1);

    console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`);
}

previousDay(2016, 9, 30);