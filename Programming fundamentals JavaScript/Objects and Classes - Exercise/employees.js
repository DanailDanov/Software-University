function employees(array) {

    let listOfNames = {};

    for (const employee of array) {

        listOfNames.name = employee;
        listOfNames.personalNum = employee.length;

        console.log(`Name: ${listOfNames.name} -- Personal Number: ${listOfNames.personalNum}`);

    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);
