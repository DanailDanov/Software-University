function trainTheTrainers(input) {

    let index = 0;
    let jury = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let gradesCount = 0;
    let totalGradesCount = 0;

    while (command !== "Finish") {
        let presentationName = command;

        let sumOfGrades = 0;


        for (let i = 1; i <= jury; i++) {
            let currentGrade = Number(input[index]);
            index++;
            gradesCount++;
            totalGradesCount += currentGrade;
            sumOfGrades += currentGrade;
        }


        let avgGrade = sumOfGrades / jury;
        console.log(`${presentationName} - ${avgGrade.toFixed(2)}.`);


        command = input[index];
        index++;


    }

    let avgAllPresentation = totalGradesCount / gradesCount;
    console.log(`Student's final assessment is ${avgAllPresentation.toFixed(2)}.`);

}

trainTheTrainers(["2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"]);