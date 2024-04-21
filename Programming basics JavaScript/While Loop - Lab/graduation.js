function graduation(input) {

    let index = 0;
    let name = input[index];
    index++
    let grades = 1;
    let sum = 0;
    let excluded = 0;

    while (grades <= 12) {

        let grade = Number(input[index]);
        index++;
        if (grade >= 4) {
            sum += grade;
            grades++;
        } else {
            excluded++;
            break;
        }
    }

    let avgGrade = sum / 12;

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
