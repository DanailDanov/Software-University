function lastKNumbersSequence(numN, numK) {

    const result = [];
    

    for (let i = 0; i < numN; i++) {

        if (result.length === 0) {
            result.push(1);
        } else if (result.length < numK) {
            let sum = result.reduce((a, b) => a + b, 0);
            result.push(sum);
        } else {
            let threeElements = result.slice(- numK).reduce((a, b) => a + b, 0);
            result.push(threeElements);
        }
    }

    return result;
}

console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2));