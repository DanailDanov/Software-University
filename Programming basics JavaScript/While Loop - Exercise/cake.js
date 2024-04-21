function cake(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let lenght = Number(input[index])
    index++;
    let command = input[index];
    index++;

    let piecesCount = width * lenght;

    while (command !== "STOP") {

        let piecesOfCake = Number(command);

        piecesCount -= piecesOfCake;

        if (piecesCount <= 0) {

            console.log(`No more cake left! You need ${Math.abs(piecesCount)} pieces more.`)
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "STOP") {
        console.log(`${piecesCount} pieces are left.`);
    }

}

cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"]);
