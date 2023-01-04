function arrayManipulations(commands) {

    let manipulatedArray = commands
        .shift()
        .split(' ')
        .map(Number);


    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i].split(' ');
        let command = currentCommand[0];
        let firstNum = Number(currentCommand[1]);
        let secondNum = Number(currentCommand[2]);

        switch (command) {
            case 'Add': manipulatedArray.push(firstNum);
                break;
            case 'Remove': manipulatedArray = manipulatedArray.filter((el) => el !== firstNum);
                break;
            case 'RemoveAt': manipulatedArray.splice(firstNum, 1);
                break;
            case 'Insert': manipulatedArray.splice(secondNum, 0, firstNum);
                break;
        }
    }

    console.log(manipulatedArray.join(' '));

}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);
