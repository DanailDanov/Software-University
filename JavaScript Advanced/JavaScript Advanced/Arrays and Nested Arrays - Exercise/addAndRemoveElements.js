function addAndRemoveElements(input) {

    let initialNumber = 1;

    const resultArray = [];

    for (let index = 0; index < input.length; index++) {

        let currentCommand = input[index];

        switch (currentCommand) {
            case 'add':
                resultArray.push(initialNumber);
                break;
            case 'remove':
                resultArray.pop();
                break;
        }

        initialNumber++
    }

    if (resultArray.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArray.join('\n'));
    }
}

addAndRemoveElements(['remove',
    'remove',
    'remove']);