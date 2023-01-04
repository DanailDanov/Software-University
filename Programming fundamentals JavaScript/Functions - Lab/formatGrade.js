function formatGrade(grade) {

    let currentNameOfGrade = '';

    if (grade < 3) {
        currentNameOfGrade = 'Fail';
        grade = 2;
        console.log(`${currentNameOfGrade} (${grade})`);
        return;
    } else if (grade >= 3 && grade < 3.50) {
        currentNameOfGrade = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        currentNameOfGrade = 'Good'
    } else if (grade >= 4.50 && grade < 5.50) {
        currentNameOfGrade = 'Very good';
    } else {
        currentNameOfGrade = 'Excellent';
    }

    console.log(`${currentNameOfGrade} (${grade.toFixed(2)})`);

}

formatGrade(3.33);