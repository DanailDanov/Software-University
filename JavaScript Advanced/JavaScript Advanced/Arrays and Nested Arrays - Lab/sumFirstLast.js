function sumFirstLast(input) {

    let parsedInput = input.map(x => Number(x));

    let sum = parsedInput[0] + parsedInput[parsedInput.length - 1];

    return sum;
}

sumFirstLast(['20', '30', '40']);