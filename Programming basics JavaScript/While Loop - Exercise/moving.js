function moving(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let sum = 0;
    let neccessarySpace = 0;

    let cubMeters = width * lenght * height;

    while (command != "Done") {

        let piecesCount = Number(command);

        sum += piecesCount;
        neccessarySpace = cubMeters - sum;

        if (neccessarySpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(neccessarySpace)} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++;

    }

    if (command === "Done") {
        console.log(`${neccessarySpace} Cubic meters left.`);
    }

}

moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
