function smallestTwoNumbers(input) {

    let sortedInput = input.sort((a, b) => a - b);
    console.log(`${sortedInput[0]} ${sortedInput[1]}`);
}

smallestTwoNumbers([30, 15, 50, 5]);