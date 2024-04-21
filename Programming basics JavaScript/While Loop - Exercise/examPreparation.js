function examPreparation(input) {

    let index = 0;
    let negativeGradeCount = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let negativeGradeCounter = 0;
    let sumOfGrade = 0;
    let countProblems = 0;
    let taskName = "";
    let isNeedBreak = false;

    while (command != "Enough") {
        taskName = command;
        let tempGrade = Number(input[index]);
        index++;
        countProblems++;
        sumOfGrade += tempGrade;

        if (tempGrade <= 4) {
            negativeGradeCounter++
            if (negativeGradeCounter === negativeGradeCount) {
                isNeedBreak = true;
                break;
            }
        }
        command = input[index];
        index++;

    }

    let avg = sumOfGrade / countProblems;
    if (isNeedBreak) {
        console.log(`You need a break, ${negativeGradeCounter} poor grades.`);
    } else {
        console.log(`Average score: ${avg.toFixed(2)}`);
        console.log(`Number of problems: ${countProblems}`);
        console.log(`Last problem: ${taskName}`)
    }

}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);