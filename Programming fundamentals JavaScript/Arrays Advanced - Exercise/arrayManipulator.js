function arrayManipulator(array1, array2) {


    for (let i = 0; i < array2.length; i++) {

        let changedArr = array2[i].split(' ');
        let command = changedArr[0];
        let param1 = Number(changedArr[1]);
        let param2 = Number(changedArr[2]);

        if (command === 'add') {

            array1.splice(param1, 0, param2);

        } else if (command === 'addMany') {
            for (let j = 2; j < changedArr.length; j++) {

                array1.splice(param1, 0, Number(changedArr[j]));
                param1++;

            }
        } else if (command === 'contains') {

            array1.indexOf(param1) !== -1 ? console.log(array1.indexOf(param1)) : console.log(-1);

        } else if (command === 'remove') {

            array1.splice(param1, 1);

        } else if (command === 'shift') {

            for (let k = 0; k < param1; k++) {

                array1.push(array1.shift());

            }
        } else if (command === 'sumPairs') {

            let newArr = [];

            while (array1.length > 0) {

                let sum = array1[0] + array1[1];

                if (array1.length === 1) {

                    sum = newArr[0];

                }

                newArr.push(sum);
                array1.splice(0, 2);

            }

            array1 = newArr;

        } else if (command === 'print') {

            console.log(`[ ${array1.join(', ')} ]`);
            break;

        }
    }
}

//arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1,], ["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"])