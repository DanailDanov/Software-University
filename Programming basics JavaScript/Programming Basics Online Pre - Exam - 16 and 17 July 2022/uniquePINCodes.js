function uniquePINCodes(input) {

    let maxNum1 = Number(input[0]);
    let maxNum2 = Number(input[1]);
    let maxNum3 = Number(input[2]);

    for (let num1 = 2; num1 <= maxNum1; num1 += 2) {
        for (let num2 = 2; num2 <= maxNum2; num2++) {
            for (let num3 = 2; num3 <= maxNum3; num3 += 2) {
                if (num2 === 2 || num2 === 3 || num2 === 5 || num2 === 7) {
                    console.log(`${num1} ${num2} ${num3}`);
                }
             }
        }

    }
}

uniquePINCodes(["8",
    "2",
    "8"]);


