function sumFirstAndLastArrayElements(numbers) {

    let firstElement = numbers[0];
    let secondElement = numbers[numbers.length - 1];

    let sum = firstElement + secondElement;
    console.log(sum);

}

sumFirstAndLastArrayElements([20, 30, 40]);