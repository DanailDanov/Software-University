function oscars(input) {

    let index = 0;
    let nameOfActor = input[index];
    index++;
    let pointFromAcademy = Number(input[index]);
    index++;
    let juryCount = Number(input[index]);
    index++;

    for (let i = 0; i < juryCount; i++) {
        let nameOfJury = input[index];
        index++;
        let pointsFromJury = Number(input[index]);
        index++;

        let totalPoints = nameOfJury.length * pointsFromJury / 2;
        pointFromAcademy += totalPoints;

        if (pointFromAcademy > 1250.5) {
            console.log(`Congratulations, ${nameOfActor} got a nominee for leading role with ${pointFromAcademy.toFixed(1)}!`);
            break;
        }

    }

    if (pointFromAcademy <= 1250.5) {
        let diff = Math.abs(pointFromAcademy - 1250.5);
        console.log(`Sorry, ${nameOfActor} you need ${diff.toFixed(1)} more!`)
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);
