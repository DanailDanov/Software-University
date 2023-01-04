function evenAndOddSubtraction(array) {

    let sumEvenNumbers = 0;
    let sumOddNumbers = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            sumEvenNumbers += array[i];
        } else {
            sumOddNumbers += array[i];
        }
    }

    console.log(sumEvenNumbers - sumOddNumbers);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);
