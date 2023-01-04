function factorialDivision(factorialNum, divideNum) {

    function factorial() {

        let multiply = 1;

        for (let i = 2; i <= factorialNum; i++) {
            multiply *= i;
        }

        return multiply;
    }

    let divide = factorial() / divideNum;

    console.log(divide.toFixed(2));

}

factorialDivision(6, 2);


