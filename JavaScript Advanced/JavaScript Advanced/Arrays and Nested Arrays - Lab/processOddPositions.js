function processOddPositions(input) {

    let result = input
        .filter((element, index) => index % 2 !== 0)
        .map(x => x * 2)
        .reverse();

    return result;
}

processOddPositions([10, 15, 20, 25]);