function sameNumbers(argument) {

    let isSame = true;
    let sum = 0;
    const firstNum = argument[0];

    argument = String(argument);

    for (let i = 0; i < argument.length; i++) {
        sum += Number(argument[i]);
    }

    for (let index = 0; index < argument.length; index++) {

        if (firstNum !== argument[index]) {
            isSame = false
        }
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(1234);
