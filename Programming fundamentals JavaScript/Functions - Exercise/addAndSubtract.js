function print(numOne, numTwo, numThree) {

    function sum() {
        let sumOfNum = numOne + numTwo;
        return sumOfNum
    }
    
    let sumOfNum = sum(numOne, numTwo, numThree);
    let result = sumOfNum - numThree;
    
    console.log(result);

}

print(23, 6, 10);   