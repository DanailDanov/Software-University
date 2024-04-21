function sortAnArrayBy2Criteria(input) {

    input.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(element => console.log(element));

}

sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);