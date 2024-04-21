function maxNumber(input) {

    let index = 0;
    let num = input[index];

    let maxNumber = Number.MIN_SAFE_INTEGER

    while (num !== "Stop") {

        let NumAsNumber = Number(num);

        if (NumAsNumber > maxNumber) {
            maxNumber = NumAsNumber;
        }
        num = input[index];
        index++;

    }
    console.log(maxNumber);
}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);
