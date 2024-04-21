function computerFirm(input) {

    let index = 0;
    let computersCount = Number(input[index]);
    index++;

    let sales = 0;
    let countOfRating = 0;

    for (let i = 1; i <= computersCount; i++) {

        let expectedSales = input[index];
        index++;
        let rating = expectedSales.charAt(2);
        let ratingAsNum = Number(rating);
        let first = expectedSales.charAt(0);
        let second = expectedSales.charAt(1);
        let sumOfFirstAndSecond = Number(`${first}${second}`);

        countOfRating += ratingAsNum;

        if (ratingAsNum === 2) {
            sales += sumOfFirstAndSecond * 0;
        } else if (ratingAsNum === 3) {
            sales += sumOfFirstAndSecond * 0.5;
        } else if (ratingAsNum === 4) {
            sales += sumOfFirstAndSecond * 0.7;
        } else if (ratingAsNum === 5) {
            sales += sumOfFirstAndSecond * 0.85;
        } else if (ratingAsNum === 6) {
            sales += sumOfFirstAndSecond * 1;
        }

    }

    let avg = countOfRating / computersCount;
    console.log(sales.toFixed(2));
    console.log(avg.toFixed(2));

}

computerFirm(["5",
    "122",
    "156",
    "202",
    "214",
    "185"]);
