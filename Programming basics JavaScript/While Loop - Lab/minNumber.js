function maxNumber(input) {

    let index = 0;
    let num = input[index];

    let maxNumber = Number.MAX_SAFE_INTEGER

    while (num !== "Stop") {

        let NumAsNumber = Number(num);

        if (NumAsNumber < maxNumber) {
            maxNumber = NumAsNumber;
        }
        index++;
        num = input[index];
        

    }
    console.log(maxNumber);
}