function smallestTwoNumbers(array) {

    let sortNum = array.sort((a, b) => a - b);
    let result = sortNum.slice(0, 2)
    console.log(result.join(' '));


}

smallestTwoNumbers([30, 15, 50, 5]);