function smallestOfThreeNumbers(numOne, numTwo, numThree) {

    let smallestNum = 0;

     if (numOne < numTwo && numOne < numThree) {
        smallestNum = numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        smallestNum = numTwo;
    } else if (numThree < numOne && numThree < numTwo) {
        smallestNum = numThree;
    } else if ( numOne === numTwo && numOne === numThree) {
        smallestNum = numOne;
    }

    console.log(smallestNum);
}

smallestOfThreeNumbers(2, 5, 3);



     //let smallestNum = Math.min(numOne, numTwo, numThree);
    //console.log(smallestNum);