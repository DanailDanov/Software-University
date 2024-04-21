function skeleton(input) {

    let minutesControl = Number(input[0]);
    let secondsControl = Number(input[1]);
    let lengthInMetres = Number(input[2]);
    let secondsForHundredMetres = Number(input[3]);

    let timeInSeconds = minutesControl * 60 + secondsControl;
    let timeSlow = lengthInMetres / 120;
    let totalTimeSlow = timeSlow * 2.5;
    let timeOfMarin = (lengthInMetres / 100) * secondsForHundredMetres - totalTimeSlow;

    if (timeOfMarin <= timeInSeconds) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${timeOfMarin.toFixed(3)}.`);
    } else {
        let diff = Math.abs(timeInSeconds - timeOfMarin);
        console.log(`No, Marin failed! He was ${diff.toFixed(3)} second slower.`);
    }

}

skeleton(["1",
    "20",
    "1546",
    "12"]);