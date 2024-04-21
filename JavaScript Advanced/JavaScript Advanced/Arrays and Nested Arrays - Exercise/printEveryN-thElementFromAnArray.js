function printElement(input, step) {

    let resultArray = [];

    for (let index = 0; index < input.length; index += step) {
        resultArray.push(input[index]);
    }

   return resultArray;
}

printElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2);
