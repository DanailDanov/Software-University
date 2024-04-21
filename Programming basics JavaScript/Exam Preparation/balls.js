function balls(input) {

    let index = 0;
    let ballsCount = Number(input[index]);
    index++;

    let redBallsCounter = 0;
    let orangeBallsCounter = 0;
    let yellowBallsCounter = 0;
    let whiteBallsCounter = 0;
    let otherBallsCounter = 0;
    let devidesFromBlackBalls = 0;

    let sumOfPoints = 0;

    for (let i = 1; i <= ballsCount; i++) {
        let colorOfBalls = input[index];
        index++;

        switch (colorOfBalls) {
            case "red":
                redBallsCounter++;
                sumOfPoints += 5;
                break;
            case "orange":
                orangeBallsCounter++;
                sumOfPoints += 10;
                break;
            case "yellow":
                yellowBallsCounter++;
                sumOfPoints += 15;
                break;
            case "white":
                whiteBallsCounter++;
                sumOfPoints += 20;
                break;
            case "black":
                devidesFromBlackBalls++;
                sumOfPoints /= 2;
                break;
            default:
                otherBallsCounter++;
                break;
        }

    }

    console.log(`Total points: ${Math.floor(sumOfPoints)}`);
    console.log(`Red balls: ${redBallsCounter}`);
    console.log(`Orange balls: ${orangeBallsCounter}`);
    console.log(`Yellow balls: ${yellowBallsCounter}`);
    console.log(`White balls: ${whiteBallsCounter}`);
    console.log(`Other colors picked: ${otherBallsCounter}`);
    console.log(`Divides from black balls: ${devidesFromBlackBalls}`);

}

balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"]);