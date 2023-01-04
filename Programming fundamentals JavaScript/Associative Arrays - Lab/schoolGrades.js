function schoolGrades(input) {

    let personGrades = {};

    for (const line of input) {

        let currLine = line.split(" ");
        let name = currLine.shift();
        let grades = currLine.map(Number);

        if (!personGrades[name]) {
            personGrades[name] = [];
        }

        personGrades[name] = personGrades[name].concat(grades);
    }

    let output = Object.entries(personGrades);
    output.sort((a, b) => a[0].localeCompare(b[0]));

    for (const [name, grades] of output) {
        let average = 0;

        for (const grade of grades) {
            average += grade
        }

        let result = average / grades.length;

        console.log(`${name}: ${result.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
