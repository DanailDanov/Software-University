function sumOfNumbersNM(num1, num2) {

    let result = 0;
    for (let i = Number(num1); i <= Number(num2); i++) {
        result += i;
    }

    console.log(result);
}

sumOfNumbersNM('1', '5');