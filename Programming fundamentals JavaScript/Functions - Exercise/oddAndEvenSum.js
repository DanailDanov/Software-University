function oddAndEvenSum(num) {

    let evenSum = 0;
    let oddSum = 0;
    let numAsString = num.toString();

    for (let i = 0; i < numAsString.length; i++) {

        let currentNum = Number(numAsString[i]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);