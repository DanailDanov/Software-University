function train(array) {

    let passengers = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');

        if (command[0] === 'Add') {
            let addPassanger = Number(command[1]);
            passengers.push(addPassanger);
        } else {
            for (let j = 0; j < passengers.length; j++) {
                if (passengers[j] + Number(command[0]) <= maxCapacity) {
                    passengers[j] += Number(command[0]);
                    break;
                }
            }
        }
    }

    console.log(passengers.join(' '));
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);
