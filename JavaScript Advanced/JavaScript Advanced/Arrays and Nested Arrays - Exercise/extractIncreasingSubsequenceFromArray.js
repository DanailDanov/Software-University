function extractIncreasingSubsequenceFromArray(input) {

    let currentBiggestNum = input.shift();

    const resultArray = [currentBiggestNum];

    for (const element of input) {

        if (element >= currentBiggestNum) {
            currentBiggestNum = element;
            resultArray.push(element);
        }
    }

    return resultArray;
}

extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);