function sumOfTwoNumbers(input) {

    let index = 0;
    let start = Number(input[index]);
    index++;
    let end = Number(input[index]);
    index++;
    let magicNumber = Number(input[index]);
    index++
    let combinationCounter = 0;
    let result = 0;
    let isFound = false;
    for (let x = start; x <= end; x++) {
        for (let y = start; y <= end; y++) {
            result = x + y;
            combinationCounter++;
            if (result === magicNumber) {
                isFound = true;
                console.log(`Combination N:${combinationCounter} (${x} + ${y} = ${magicNumber})`);
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`);
    }


}

sumOfTwoNumbers(["23",
    "24",
    "20"]);