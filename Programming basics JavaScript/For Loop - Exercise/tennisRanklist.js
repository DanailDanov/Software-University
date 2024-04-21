function tennisRanklist(input) {

    let index = 0;
    let tournamentCount = Number(input[index])
    index++;
    let startPoints = Number(input[index]);
    index++;

    let currentPoint = 0;
    let winCounter = 0;

    for (let i = 0; i < tournamentCount; i++) {

        let result = input[index];
        index++;

        switch (result) {
            case "W":
                winCounter++;
                currentPoint += 2000;
                break;
            case "F":
                currentPoint += 1200;
                break;
            case "SF":
                currentPoint += 720;
                break;
        }

    }

    let totalPoints = startPoints + currentPoint;
    let avgPoints = Math.floor(currentPoint / tournamentCount);
    let percent = winCounter / tournamentCount * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${percent.toFixed(2)}%`);


}

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"]);