function addAndSubtract(array) {


    let sumOriginArray = 0;
    let sumModifiedArray = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {

        let currentNumber = array[i]
        sumOriginArray += currentNumber;
        let sumEvenNum = 0;
        let sumOddNum = 0;

        if (currentNumber % 2 === 0) {
            sumEvenNum += currentNumber + i;
            newArray.push(sumEvenNum);
        } else {
            sumOddNum += currentNumber - i;
            newArray.push(sumOddNum);
        }

        sumModifiedArray += sumEvenNum + sumOddNum;

    }

    console.log(newArray);
    console.log(sumOriginArray);
    console.log(sumModifiedArray);

}

addAndSubtract([5, 15, 23, 56, 35]);
