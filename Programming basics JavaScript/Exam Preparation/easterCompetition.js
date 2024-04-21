function easterCompetition(input) {

    let index = 0;
    let foodCount = Number(input[index]);
    index++;

    let bestName = "";
    let maxGrade = 0;
    let sumOfPoints = 0;

    for (let i = 1; i <= foodCount; i++) {

        let command = input[index];
        index++;
        let grade = input[index];

        while (grade !== "Stop") {
            sumOfPoints += Number(grade);
            index++;
            grade = input[index];
        }
        if (grade === "Stop") {
            console.log(`${command} has ${sumOfPoints} points.`);
            if (sumOfPoints > maxGrade) {
                bestName = command;
                maxGrade = sumOfPoints
                console.log(`${bestName} is the new number 1!`);
            }

            sumOfPoints = 0;
        }

        index++;

    }

    console.log(`${bestName} won competition with ${maxGrade} points!`)
}

easterCompetition(["3",
    "Chef Manchev",
    "10",
    "10",
    "10",
    "10",
    "Stop",
    "Natalie",
    "8",
    "2",
    "9",
    "Stop",
    "George",
    "9",
    "2",
    "4",
    "2",
    "Stop"]);
